import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBGN9a-Kpw1OyNzwesl9MA4GNLNyQSlQYg",
  authDomain: "chuck-todo-app.firebaseapp.com",
  databaseURL: "https://chuck-todo-app.firebaseio.com",
  storageBucket: "chuck-todo-app.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// set data
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.1.0'
  },
  isRunning: true,
  user: {
    name: 'Chuck',
    age: 34
  }
})

// update data & report status
// firebaseRef.update({
//   isRunning: false
// }).then(() => {
//   console.log('Update worked!');
// }, (e) => {
//   console.log('Update failed');
// })

// firebaseRef.update({
//   'app/name': 'Other App',
//   'user/name': 'Andrew'
// })
//
// firebaseRef.child('app').update({
//   name: 'Third App',
// })
//
// firebaseRef.child('user').update({
//   name: 'Emily',
// })


// remove data
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '2.0.0',
//   name: null
// })


//fetch data
// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got from database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Update failed');
// });

//listen to data change (fetch data many times)
// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val())
// }
// firebaseRef.on('value', logData);
//
// //turn of event listener
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false})

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// }
// firebaseRef.child('user').on('value', logData);
//
// firebaseRef.update({
//   'user/name': 'Mike'
// })
//
// firebaseRef.update({
//   'app/name': 'some app'
// })


// Firebase save list as object with auto-generated id
var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val())
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val())
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val())
});

var newNoteRef = notesRef.push().set({ text: 'Walk the dog!' })
console.log('Todo id', newNoteRef.key);
