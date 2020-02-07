import firebase from 'firebase/app'
import firestore from 'firebase/forestore'

let firebaseConfig = {
  apiKey: "AIzaSyCKd09cq2pm8uUix67NnPChOGwQr5yYw1E",
  authDomain: "nakalua-chat.firebaseapp.com",
  databaseURL: "https://nakalua-chat.firebaseio.com",
  projectId: "nakalua-chat",
  storageBucket: "nakalua-chat.appspot.com",
  messagingSenderId: "25987606415",
  appId: "1:25987606415:web:09a96451b362883d998dfa",
  measurementId: "G-Y6W5CMFYCQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()