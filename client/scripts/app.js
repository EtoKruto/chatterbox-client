// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  message: {
    username: 'Its a Me Mario',
    text: 'Hello World',
    roomname: '4chan'
  },

  // compiled: _.template(
  //   '<div class=\'module module-movie\' style=\'background-image: url(<%= movieImage %>)\'>' +
  //   '<div class=\'movie-info\'>' +
  //   '<h3 class=\'movie-title\'>' +
  //   '<%= movieTitle %>' +
  //   '</h3>' +
  //   '<p class=\'movie-director\'>' +
  //   '<%= movieDirector %>' +
  //   '</p>' +
  //   '</div>' +
  //   '</div>'
  // ),

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.


    setInterval(App.fetch, 5000);


  },

  fetch: function(callback = ()=>{}) {


    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data); //array of Objects

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      // reassign messages to data
      // cb(data);
      Messages._data = data;

      // add {results} as a class
      // ADDED to PARSE.readALL

      // - The rooms and messages will re-render once we get the updates
      // Messages.update(data, MessagesView.render)
      // Rooms.update(data, RoomsView.render)


      // reassign messages to Rooms
      // Rooms._data = data; // ADD SOMETHING
      MessagesView.render();

    });



    // FormView.initialize();
    // RoomsView.initialize();
    MessagesView.initialize();
    App.stopSpinner();

  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
