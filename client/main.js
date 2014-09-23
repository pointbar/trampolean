Meteor.startup(function() {
  $('body').attr('data-spy', 'scroll');
  $('body').attr('data-target', '.navbar');
  $('div.modal-body').append('<a title="Logiciel billetterie en ligne" href="http://www.weezevent.com//?c=sys_widget" class="weezevent-widget-integration" target="_blank" data-src="https://www.weezevent.com/widget_billeterie.php?id_evenement=80266&amp;code=51872&amp;color_primary=00AEEF" data-width="650" data-height="400" data-id="75827" data-resize="0" data-noscroll="0">Billetterie Weezevent</a><script type="text/javascript" src="https://www.weezevent.com/js/widget/min/widget.min.js"></script>');

  Meteor.subscribe('stats', function () {
    headers.ready(function() {
      var user =  Stats.findOne({'ip': headers.get('x-forwarded-for')}) || {};

      user.offer = user.offer || 0;
      user.updated_date = new Date();

      document.URL.search('#offer$') && user.offer++;

      if (user._id) {
        Meteor.call('updateStat', user._id, user);
      }
      else {
        user.created_date = new Date();
        user.ip = headers.get('x-forwarded-for');
        user._id = Meteor.call('insertStat', user);
      }

      Session.set('user', user._id);
    });
  });
});

Template.main.events({
  'click .subscribe': function () {
    var user = Stats.findOne({'_id': Session.get('user')});
    user.button = true;
    Meteor.call('updateStat', Session.get('user'), user);
  }
})

