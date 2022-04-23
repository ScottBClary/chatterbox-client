// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    //debugger;
    App.username = window.location.search.substr(10);


    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.

      // Loop through data
      // each element of data is a message object
      /* {
        campus:
        created_at:
        github_handle:
        message_id:
        roomname:
        username:
        text:
        updated_at:
      }
      */
      Messages._data = [];
      for (message of data) {
      //  debugger;
        Messages.addMessage(message);
        Rooms.addRoom(message.roomname);
        Friends.addFriend(message.username, message.github_handle);
      }


      //send messages to the message 'storage' (likey be an object), will either have to clear that object first, or delete dupes
      //stringify everything before you do anything with it
      //check roomName, if room exists on list, do nothing, if absent add to list
      //check username, if name exists on list, do nothing, if absent create new user object with a friends list from name


    });
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
