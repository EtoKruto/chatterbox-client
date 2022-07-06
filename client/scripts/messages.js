// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],


  // Parse.readAll(function() {
  //   console.log('went great');
  // }),

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  retrieve: function () {


  },

  items: function () {
    // return Message._data[message.objectID] = message;


  },

  add: function (message, callback) {

    // Message._data[message.objectID] = Message.conform(message);

    // callback(Messages.items());
  },


  update: function (messages, callback) {

    // ADDED
    // for (const message of messages) {
    // Messages.add(message);
    // }
    // callback(Messages.items());
    // Message.storage = Message._data.concat(messages);

  },

  conform: function (message) {
    // messages.text = message.text || '';
    // messages.username = message.username || '';
    // messages.roomname = message.roomname || '';
    // return message;

  },

};