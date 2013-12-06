window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {

    $rootEl = $('#content');
    // feedsCollection

    alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  NewReader.initialize();
});
