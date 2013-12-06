NewReader.Views.EntriesShow = Backbone.View.extend({

  template: JST['entries/show'],

  render: function() {
    var renderedContent = this.template({
      collection: this.collection
    })

    this.$el.html(renderedContent);

    return this;
  },

});

//need to write entries index to call inside feed show
//define the models and collections for feed and entries