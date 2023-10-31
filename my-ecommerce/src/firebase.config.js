import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFZbDBfnxzVhznLbRwBZpi5duRuMX8Mks",
  authDomain: "keyboard-cc092.firebaseapp.com",
  projectId: "keyboard-cc092",
  storageBucket: "keyboard-cc092.appspot.com",
  messagingSenderId: "509214328137",
  appId: "1:509214328137:web:27c625afec960b44608698",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
