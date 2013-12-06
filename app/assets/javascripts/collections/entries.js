NewReader.Collections.Entries = Backbone.Collection.extend({

  model: NewReader.Models.Entry,
  url: "/feeds/:feed_id/entries" // may need to change

});
