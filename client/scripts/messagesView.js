// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //TEST: Load 5 messageViews?
    //Which m

    App.fetch();

    //MessagesView.render();

  },
  /*
      {
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
  render: function() {
    // TODO: Render _all_ the messages.
    //MessagesView.$chats.append($(MessageView.render("Hello")));
    for (var i = 0; i < 5; i++) {
      MessagesView.$chats.append($(MessagesView.renderMessage(Messages._data[i])));
    }
    // MessagesView.render --
    //   for each message, in messages, append to DOM messageView(message)
  },

  renderMessage: function(message) {
    for (var key in message) {
      if (!message.key) {
        message[key] = 'empty';
      }
    }

    MessageView.render(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};