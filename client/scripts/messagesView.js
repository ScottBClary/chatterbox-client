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
    //debugger;
    MessagesView.render();

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
    // MessagesView.$chats.append($(MessageView.render({username: 'scott', text:'message'}))); WORKS
    var messageList = Messages.getMessages();
    for (var i = 0; i < messageList.length; i++) {
      var currentMessage = messageList[i];
      var readyForSite = MessageView.render(currentMessage);
      MessagesView.$chats.append($(readyForSite));
    }

    // MessagesView.render --
    //   for each message, in messages, append to DOM messageView(message)
  },

  renderMessage: function(message) {

    var renderedText = MessageView.render(message);
    MessagesView.$chats.append($(renderedText));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};