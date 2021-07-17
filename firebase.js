import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyCGxTnaLWMZOsApbiA",
    authDomain: "clone-ed45e.firebaseapp.com",
    projectId: "clone-ed45e",
    storageBucket: "clone-ed45e.appspot.com",
    messagingSenderId: "466090717125",
    appId: "1:466090717125:web:6405020946877fd67b25ac",
    measurementId: "G-6PR6JZL5W9"
});

  
  const auth = firebase.auth();

  export { auth};
