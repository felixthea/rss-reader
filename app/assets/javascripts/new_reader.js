window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    var feedPOJOs = JSON.parse($("#bootstrapped-feeds").html())

    var feeds = new NewReader.Collections.Feeds(feedPOJOs, {parse: true});

    new NewReader.Routers.Feeds($('#content'), feeds)

    Backbone.history.start();

  }
};

$(document).ready(function(){
  NewReader.initialize();
});
