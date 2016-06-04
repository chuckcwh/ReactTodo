import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBGN9a-Kpw1OyNzwesl9MA4GNLNyQSlQYg",
    authDomain: "chuck-todo-app.firebaseapp.com",
    databaseURL: "https://chuck-todo-app.firebaseio.com",
    storageBucket: "chuck-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
