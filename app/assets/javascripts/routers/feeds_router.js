NewReader.Routers.Feeds = Backbone.Router.extend({
  initialize: function($rootEl, feeds){
    this.$rootEl = $rootEl;
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:feed_id/entries": "show"
  },

  index: function () {
    var feedsIndexView = new NewReader.Views.FeedsIndex({
      collection: this.feeds
    })

    this._swapView(feedsIndexView);
  },

  show: function (feed_id) {
    var feed = this.feeds.get(feed_id)
    var feedsShowView = new NewReader.Views.FeedsShow({
      model: feed
    });

    this._swapView(feedsShowView);
  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $('#content').html(newView.render().$el);
  }

});
