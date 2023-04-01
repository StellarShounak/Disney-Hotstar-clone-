import firebase from "firebase";
const firebaseConfig = {

    apiKey: "AIzaSyDRPxVaid6028pU3T1TrD7SYsBD3a8ibDY",
    authDomain: "disney--hotstar-clone.firebaseapp.com",
    projectId: "disney--hotstar-clone",
    storageBucket: "disney--hotstar-clone.appspot.com",
    messagingSenderId: "942688945329",
    appId: "1:942688945329:web:9f2b4dede0818e55548e90",
    measurementId: "G-H2BMDLTKXE"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
