import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDd6qExdAIpJe3cKASjndHnM4jgXSSUk68",
    authDomain: "netflix-clone-d1a8d.firebaseapp.com",
    projectId: "netflix-clone-d1a8d",
    storageBucket: "netflix-clone-d1a8d.appspot.com",
    messagingSenderId: "255439759068",
    appId: "1:255439759068:web:f48c2d19ee2c07737eb619"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {auth};
  export default db;
