// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

// $(document).ready(function() {

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {

    App.username = window.location.search.substr(10);

    var loadSuccessFunction = function() {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    };

    App.startSpinner();
    //debugger;
    App.fetch(loadSuccessFunction);

    // var recurse = function() {
    //   FormView.initialize();
    //   RoomsView.initialize();
    //   MessagesView.initialize();
    //   setTimeout(recurse, 1000);
    // };
    // recurse();
    //MessagesView.$chats.append($(MessageView.render({username: 'scott', text:'message'})));
    // Fetch initial batch of messages

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data);

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
        for (var key in message) {
          if (!message[key]) {
            message[key] = 'empty input';
          }
          if (typeof message[key] !== 'string') {
            message[key] = 'invalid input type';
            //this is where we check usernames and values to make sure they are strings, and wont screw our code  by running ".includes" on the string with all the special characters, and changing to the string to "invalid input type" if true
            //--TO BE IMPLIMENTED ONCE EVERYTHING IS WORKING -- NOT BEFORE--
          }
        }
        Messages.addMessage(message);
        Rooms.addRoom(message.roomname);
        Friends.addFriend(message.username, message.github_handle);
      }

      callback();
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
App.initialize();
App.stopSpinner();
// });
