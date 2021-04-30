import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAq2vyeUdi-YwCE1zVZem7TXGHOEUAltVM",
    authDomain: "back-end-tugas-6.firebaseapp.com",
    projectId: "back-end-tugas-6",
    storageBucket: "back-end-tugas-6.appspot.com",
    messagingSenderId: "89714531733",
    appId: "1:89714531733:web:e7775e25fc49e8165baa9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase