// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  addRoom: function(roomName) {
    //check if room in message doesn't exist, add if it doesnt, fizzle if it does
    if (Rooms._data[roomName] === undefined) {
      Rooms._data[roomName] = roomName;
    }
  },

  getRooms: function() {
    // iterate over data, and push to dom on room list
    // <drop down menu>
    return Rooms._data;
  },

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};