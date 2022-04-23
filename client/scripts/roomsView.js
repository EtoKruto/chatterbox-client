// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate through rooms (inside of rooms.js)
    // apply the RoomsView.renderRoom() function



  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    // iterate through messages (from messages.js)
    // if message contains roomName,
      // use render function on that message


    console.log({message});



    RoomsView.$select.append( `<option value=${roomName}>${roomName}</option>` );

  //  <select name="cars" id="cars">
  //   <option value="volvo">Volvo</option>
  //   <option value="saab">Saab</option>
  //   <option value="opel">Opel</option>
  //   <option value="audi">Audi</option>
  // </select>

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.



  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.



  }

};
