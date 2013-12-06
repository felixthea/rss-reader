NewReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function(){}, // may need to pass in collection

  routes: {
    "": "index",
    "/feeds/:id": "show"
  },


  index: function () {
    var feedsIndexView = new NewReader.Views.FeedsIndex({
      collection: feedCollection
    })

    $rootEl.html(feedsIndexView.render().$el);
  },

  show: function () {
    var feedsShowView = new NewReader.Views.FeedsShow({
      // model: gets feed model
    })

    $rootEl.html(feedsShowView.render().$el);
  }

});
