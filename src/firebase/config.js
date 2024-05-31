import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlOddx0uRVxXTE_O1oTDVG-vk7mNLTVUo",
    authDomain: "fir-73225.firebaseapp.com",
    projectId: "fir-73225",
    storageBucket: "fir-73225.appspot.com",
    messagingSenderId: "408707659500",
    appId: "1:408707659500:web:a4af5f05721ec8afa657c9",
    measurementId: "G-EHHB9G18DQ"
  };

 export default firebase.initializeApp(firebaseConfig)