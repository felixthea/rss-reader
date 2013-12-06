window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var feedPOJOs = JSON.parse($("#bootstrapped-feeds").html())
    var feeds = new NewReader.Collections.Feeds(feedPOJOs);

    new NewReader.Routers.Feeds($('#content'), feeds)

    Backbone.history.start();

    // feeds.create($('#bootstrapped-feeds'))

    // feeds.fetch({
//       success: function() {
//         Backbone.history.start();
//         new NewReader.Routers.Feeds($('#content'));
//       }
//     });
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
