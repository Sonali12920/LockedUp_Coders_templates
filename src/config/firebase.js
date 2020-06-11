import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD88g5o27-me0gTmG6n9hYbqISdNm4GXDc",
    authDomain: "lockedup-1fdd3.firebaseapp.com",
    databaseURL: "https://lockedup-1fdd3.firebaseio.com",
    projectId: "lockedup-1fdd3",
    storageBucket: "lockedup-1fdd3.appspot.com",
    messagingSenderId: "579253219110",
    appId: "1:579253219110:web:8d2ac6e2c8263eed799be7"
  };
  firebase.initializeApp(firebaseConfig)
  export default {
      firestore:firebase.firestore(),
      auth: firebase.auth()
  }