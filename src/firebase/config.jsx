import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAaJSroJGTjP9vhuOg_NL9MM-blMHHyDdc",
    authDomain: "react-olx-b9cc0.firebaseapp.com",
    projectId: "react-olx-b9cc0",
    storageBucket: "react-olx-b9cc0.appspot.com",
    messagingSenderId: "331810360645",
    appId: "1:331810360645:web:86b5e1d94ba98573af822c",
    measurementId: "G-24DVV0ND7Y"
  };
  
  export default firebase.initializeApp(firebaseConfig)

