// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.set({
      count: 0,
      votes: 0
    });
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  incrementCount: function() {
    this.set('count', this.get('count') + 1);
  },

  upVote: function(){
    this.set('votes', this.get('votes') + 1);
  },

  downVote: function(){
    this.set('votes', this.get('votes') - 1);
  }

});
