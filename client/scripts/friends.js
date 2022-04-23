// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  addFriend: function(userName, githubHandle) {
    //check if room in message doesn't exist, add if it doesnt, fizzle if it does
    if (Friends._data[userName] === undefined) {
      Friends._data[userName] =
      {
        createdBy: githubHandle,
        userName: userName,
        friends: {},
        sentMessages: {}
      };
    }
  },

  getFriends: function() {
    // iterate over data, and push to dom on room list
    // <drop down menu>
    return Friends._data;
  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

};