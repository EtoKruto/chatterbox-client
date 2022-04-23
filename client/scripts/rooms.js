// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  size: 1,


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomName) {
    //if room doesn't exist, append a new HTML element with the next Room avaiable (based on size)
    if (Rooms.size < 10) {
      // $('#rooms select').append(`<option value=${Rooms.size} > Room: ${Rooms.size} </option>`);
      RoomsView.renderRoom(Rooms.size);
      Rooms.size ++;
    } else {
      alert('Too Many Rooms, Max is 10 Rooms');
    }


    // var $singleMessageContainer = $('<div id="singleMessageContainer"></div>');

    // $singleMessageContainer.append(`<a class='username' id="${message.username}">Username: ${message.username}</a>`);
    // <option value="volvo">Volvo</option>
    // <option value="saab">Saab</option>
    // <option value="opel">Opel</option>

  },

  updateList: function () {

  },

  markSelected: function (roomName) {

  }

};