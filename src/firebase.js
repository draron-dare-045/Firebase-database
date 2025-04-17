import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA3iiaQHUAjLBwbEot46o37R-hsr45paCA",
  authDomain: "test-2de0c.firebaseapp.com",
  databaseURL: "https://test-2de0c-default-rtdb.firebaseio.com",
  projectId: "test-2de0c",
  storageBucket: "test-2de0c.firebasestorage.app",
  messagingSenderId: "997292452209",
  appId: "1:997292452209:web:7cbf9df095fb73f55d6ed0",
  measurementId: "G-571Z3365Y6"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(); 
