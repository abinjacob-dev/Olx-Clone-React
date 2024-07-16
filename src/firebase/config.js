import firebase from "firebase";
import "firebase/auth"
import "firebase/firebase"
import "firebase/storage"
import 'dotenv/config'


const firebaseConfig = {
  apiKey: "process.env.API_KEY",
  authDomain: "olx-clone-5b99f.firebaseapp.com",
  projectId: "olx-clone-5b99f",
  storageBucket: "olx-clone-5b99f.appspot.com",
  messagingSenderId: "313313242435",
  appId: "1:313313242435:web:c0e94bfc9b06f4403453f6",
  measurementId: "G-NXLKWQ7CH8",
};
export default firebase.initializeApp(firebaseConfig);
