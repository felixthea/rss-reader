NewReader.Views.FeedsShow = Backbone.View.extend({

  template: JST['feeds/show'],

  render: function() {
    var renderedContent = this.template({
      // model: get model
    })

    this.$el.html(renderedContent);

    return this;
  }

});
