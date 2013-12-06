NewReader.Views.FeedsShow = Backbone.View.extend({

  template: JST['feeds/show'],

  events: {
    "click #refresh" : "render"
  },

  render: function() {
    var that = this;
    var renderedContent = this.template({
      model: that.feed
    })

    this.$el.html(renderedContent);

    return this;
  },



});
