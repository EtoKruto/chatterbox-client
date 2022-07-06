// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null, //<< should be a SET vs an Array
  size: 1,

  items: function (roomName) {
    return [...Rooms._data] //return sall the rooms in the set
  },
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomName, callback = () => {}) {
    //if room doesn't exist, append a new HTML element with the next Room avaiable (based on size)
    if (Rooms.size < 10) {
      // $('#rooms select').append(`<option value=${Rooms.size} > Room: ${Rooms.size} </option>`);
      RoomsView.renderRoom(Rooms.size);
      Rooms.size ++;
    } else {
      alert('Too Many Rooms, Max is 10 Rooms');
    }




    // add: function(roomname, callback = () = (}) { Rooms.storage.add(roomname); Rooms.selected = room; callback(Rooms.items()); },




    // var $singleMessageContainer = $('<div id="singleMessageContainer"></div>');

    // $singleMessageContainer.append(`<a class='username' id="${message.username}">Username: ${message.username}</a>`);
    // <option value="volvo">Volvo</option>
    // <option value="saab">Saab</option>
    // <option value="opel">Opel</option>

  },

  updateList: function (messages, callback = () => {}) {


    // update: function() • messages.forEach(message { Rooms.add(message.roomname); }); callback(Rooms.items());

  },

  markSelected: function (roomName) {

  }

};