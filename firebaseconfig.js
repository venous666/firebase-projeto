import firebase from "firebase"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyD7qv5M7y8D88RjlwRC4SU7-CrogF-FvJw",
    authDomain: "task-f69eb.firebaseapp.com",
    projectId: "task-f69eb",
    storageBucket: "task-f69eb.appspot.com",
    messagingSenderId: "496198663045",
    appId: "1:496198663045:web:e5f00ddc0c427fa860e2ec"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database 