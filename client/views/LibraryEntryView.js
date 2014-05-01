// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Plays: </td><td><%= count %></td><td><button class="play">&#9834</button></td><td>Votes:</td><td><%= votes %></td><td><button class="btn">+</button></td><td><button class="dbtn">-</button></td>'),

  initialize: function() {
    this.model.on('change', function () {
      this.render();
    }, this);
  },

  events: {
    'click .play': function() {
      this.model.enqueue();
    },

    'click .btn': function(){
      this.model.upVote();
    },

    'click .dbtn': function(){
      this.model.downVote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
