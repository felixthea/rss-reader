NewReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],

  render: function () {
    var renderedContent = this.template({
      collection: feedsCollection
    })

    this.$el.html(renderedContent);

    return this;
  }
});
