import Ember from 'ember';

export default Ember.Component.extend({
  src: "http://placehold.it/300x150?text=No+Image",
  actions: {
    labelClick: function() {
      alert('meow');
    }
  }
});
