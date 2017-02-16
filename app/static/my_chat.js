// My Implementation of FireChat
// With Some Mods :)
function login() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch(function(error) {
    console.log("Error authenticating user: ", error);
  });
}
console.log('chat called', firebase.auth().currentUser);
firebase.auth().onAuthStateChanged(function(user) {
  
  if (user) {
    initChat(user);
  }
});

  function initChat(user) {
    console.log('InitChat Called!');
    var chatRef = firebase.database().ref("andela-pair");

    var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper")); chat.setUser(user.uid, user.displayName); }
