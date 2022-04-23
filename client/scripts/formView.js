// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {

    $( '#message' ).on('keyup', function() {
      console.log('key pressed');
      FormView.setStatus(false);
    });



    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    // Declare a variable that takes in the roomName and add it to the POST object before send

    // create a message object
    //username
    //text
    //roomname
    let textMessage = {};
    textMessage.roomname = $('select option').filter(':selected').val() || 'No Room :(';



    textMessage.username = window.location.search.slice(10);
    textMessage.text = $('input:text').val();
    // pass message to Parse.create
    // console.log(textMessage);
    // console.log('this', this.id);
    // console.log(event);


    //clear the message after POST
    Parse.create(textMessage);

    // console.log('click!');
  },



  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};