// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  addFriend: function () {
    return [...Friends._data];
  },

  addFriend: function (username) {
    // add username as property of data, default value of true;

    if (Friends._data[username] === undefined) {
      Friends._data[username] = username;
    } else {
      //if username/value pair exists, return anyways
      return;
    }


  },
  toggleStatus: function (usernameClicked, callback = () => {}) {
    //checks if friend is in data
    console.log('Clicked the Username:', usernameClicked);

    // if (Friends._data[usernameClicked]) {
    //   delete Friends._data[usernameClicked];
    // }
    if (!Friends._data[usernameClicked]) {
      // if  it exists then toggle
      // else addFriend
      Friends.addFriend(usernameClicked);
    } else {
      delete Friends._data[usernameClicked];
    }

    // if(Friends.isFriend(name)) {
    //   Friends.storage.delete(name);
    //   callback(false);
    // } else {
    //   Friends._data.add(name);
    //   callback(true);
    // }

  },

  checkStatus: function (usernameClicked) {
    //if exist, return true
    return Friends._data.has(name);
    //else return false


  }

};