NewReader.Models.Feed = Backbone.Model.extend({
  parse: function (feed) {
    var entries = new NewReader.Collections.Entries(feed.entries);
    feed.entries = entries
    return feed;
  }
});
