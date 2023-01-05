// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iU1OKftvMiW7bCAJ4-xBQ6oz5SxkGGk",
  authDomain: "react-curso-34fcf.firebaseapp.com",
  projectId: "react-curso-34fcf",
  storageBucket: "react-curso-34fcf.appspot.com",
  messagingSenderId: "1067511955405",
  appId: "1:1067511955405:web:760bff58d4e6124d0b4e84"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);