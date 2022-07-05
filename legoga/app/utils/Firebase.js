import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDvGlEYIb1RuVUWGU3OsmfvdITsbNdXM48",
    authDomain: "legogamer-38984.firebaseapp.com",
    projectId: "legogamer-38984",
    storageBucket: "legogamer-38984.appspot.com",
    messagingSenderId: "756571073610",
    appId: "1:756571073610:web:59b7a809eddabe69ed0ab3"
  }

  export const firebaseapp = firebase.initializeApp(firebaseConfig)
