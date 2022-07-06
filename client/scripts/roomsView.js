// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // add html default element
    // $('#rooms select').append('<option value="testroom">testroom</option> ');

    // add a click event to rooms submit button, that adds rooom
    $('#rooms button').click(function() {
      Rooms.add();
    });
    // RoomsView.$select.on(“change”, RoomsView.handleChange); RoomsView.$button.on(“click”, RoomsView.handleclick);


  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterate through rooms (inside of rooms.js)
    // apply the RoomsView.renderRoom() function

    // // RoomsView.$select.html(“”);
    // Rooms.items().forEach(RoomsView.renderRoom);
    // RoomsView.$select.val(Rooms.selected);

  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    // iterate through messages (from messages.js)
    // if message contains roomName,
    // use render function on that message

    // var $option = $(“<option>”)
    // .val(roomname)
    // .text(roomname);
    // RoomsView.$select.append($option);
    // console.log({message});



    RoomsView.$select.append( `<option value="Room ${roomName}"> Room: ${roomName}</option>`);

    //  <select name="cars" id="cars">
    //   <option value="volvo">Volvo</option>
    //   <option value="saab">Saab</option>
    //   <option value="opel">Opel</option>
    //   <option value="audi">Audi</option>
    // </select>

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // Rooms.selected.RoomsView.$select.val();
    // MessagesView.render();

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // var roomname = prompt("Enter a room name");
    // if (roomname) {
    // Rooms.add(roomname, () => RoomsView.render();
    // MessagesView.render();

  }

};
