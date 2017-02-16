// app/static/editor.js
// This is the code that loads the editor. Using Ace instead of Codemirror



      //// Initialize Firebase.
var config = {
      apiKey: "AIzaSyAcGzXdxjWp7AuQySWpqF0ZA7dewKheo7s",
      authDomain: "andelapair.firebaseapp.com",
      databaseURL: "https://andelapair.firebaseio.com",
      messagingSenderId: "513770463795"
};

firebase.initializeApp(config);
function init() {

    
    firebase.auth().onAuthStateChanged(function (user) {
    
        if (!user){
            console.log('User is not logged');
            return window.location.href = "/signin";
        }
        else{
            console.log('User is logged in', user);
        }
    });
      //// Get Firebase Database reference.
      var firepadRef = getExampleRef();

      //// Create ACE
      var editor = ace.edit("firepad-container");
      editor.setTheme("ace/theme/monokai");
      var session = editor.getSession();
      session.setUseWrapMode(true);
      session.setUseWorker(false);
      session.setMode("ace/mode/python");

      //// Create Firepad.
      var firepad = Firepad.fromACE(firepadRef, editor, {
        defaultText: '# Start Coding Something In Python! }'
      });
    }

    // Helper to get hash from end of URL or generate a random one.
    function getExampleRef() {
      var ref = firebase.database().ref();
      var hash = window.location.hash.replace(/#/g, '');
      if (hash) {
        ref = ref.child(hash);
      } else {
        ref = ref.push(); // generate unique location.
        window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
      }
      if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
      }
      return ref;
    }
