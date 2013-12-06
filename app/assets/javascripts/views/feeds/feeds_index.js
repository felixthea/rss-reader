NewReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST['feeds/index'],

  render: function () {
    var that = this;

    var renderedContent = this.template({
      collection: that.collection
    })

    this.$el.html(renderedContent);

    return this;
  }
});
