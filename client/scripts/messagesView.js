// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //maybe load the event handlers once all of the message load???

  },

  render: function() {
    // TODO: Render _all_ the messages.
    // iterate through messages, invoking renderMessage on it
    $('#singleMessageContainer').remove();

    for (let i = Messages._data.length - 1; i > 0; i--) {
      // message of Messages._data
      MessagesView.renderMessage(Messages._data[i]);
    }

    $('.username').click(function(event) {
      console.log('this', this.id);
      MessagesView.handleClick(this.id);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    var $singleMessageContainer = $('<div id="singleMessageContainer"></div>');

    $singleMessageContainer.append(`<a class='username' id="${message.username}">Username: ${message.username}</a>`);
    $singleMessageContainer.append(`<div id='singleMessage'>Message:  ${message.text} </div>`);
    $singleMessageContainer.append(`<div id='singleMessage'>Room Name: ${message.roomName}</div>`);
    $singleMessageContainer.append('<div >-------------------------------</div>');

    MessagesView.$chats.append($singleMessageContainer);


  },

  handleClick: function(username) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // console.log('hi');
    Friends.toggleStatus(username);




  }

};