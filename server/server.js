Meteor.startup(function () {

  Meteor.publish('stats', function () {
    return Stats.find();
  });

  Meteor.methods({
    insertStat: function (user) {
      return Stats.insert(user);
    },
    updateStat: function (id, user) {
      Stats.update(id, user);
    }
  });

});
