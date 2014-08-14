Meteor.startup(function() {
   $('body').attr('data-spy', 'scroll');
   $('body').attr('data-target', '.navbar');
  $('div.modal-body').append('<a title="Logiciel billetterie en ligne" href="http://www.weezevent.com//?c=sys_widget" class="weezevent-widget-integration" target="_blank" data-src="https://www.weezevent.com/widget_billeterie.php?id_evenement=75827&amp;code=51872&amp;resize=1&amp;color_primary=0090ef" data-width="500" data-height="600" data-id="75827" data-resize="1" data-noscroll="0">Billetterie Weezevent</a><script type="text/javascript" src="https://www.weezevent.com/js/widget/min/widget.min.js"></script>');
});

