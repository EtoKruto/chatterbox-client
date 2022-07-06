// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //maybe load the event handlers once all of the message load???
    // MessagesView.$chats.on('click','usernmame', MessagesView.handleClick);


  },

  render: function() {
    // TODO: Render _all_ the messages.
    // iterate through messages, invoking renderMessage on it
    MessagesView.$chats.html('');
    // $('#singleMessageContainer').remove();

    for (let i = Messages._data.length - 1; i > 0; i--) {
      // message of Messages._data
      MessagesView.renderMessage(Messages._data[i]);
    }

    // messages.forEach(message => {
    //   MessagesView.renderMessage(message);
    // });


  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let styleVariable;
    if (Friends._data[message.username]) {
      styleVariable = 'background-color: rgba(255,0,0,0.34);';
    }

    //if Friends._data has a friend as the message.username then add attribute

    var $singleMessageContainer = $(`<div style="${styleVariable}"id="singleMessageContainer"></div>`);

    $singleMessageContainer.append(`<a class='username' id="${message.username}">Username: ${message.username}</a>`);
    $singleMessageContainer.append(`<div id='singleMessage'>Message:  ${message.text} </div>`);
    $singleMessageContainer.append(`<div id='singleMessage'>Room Name: ${message.roomname}</div>`);
    $singleMessageContainer.append('<div >-------------------------------</div>');

    $('.username').click(function(event) {
      console.log('this', this.id);
      console.log('Clicked the event:', event);
      MessagesView.handleClick(this.id);
    });

    MessagesView.$chats.prepend($singleMessageContainer);


    // var $message = MessagesView.render(message);
    // MessagesView.$chats.prepend($message);




  },

  handleClick: function(username) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).

    // check if user exists and callback the render once done
    // var username = $(event.target).data('username');
    // if (username === undefined) { return; }
    // Friends.toggleStatus(username, MessagesView.render);

    console.log('hi, user is:', username);
    Friends.toggleStatus(username);




  }

};