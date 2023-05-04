// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw3oP7SIbOSO_IUepI7Mk1Cu3TW-RivG8",
  authDomain: "otp-verification-1f6db.firebaseapp.com",
  projectId: "otp-verification-1f6db",
  storageBucket: "otp-verification-1f6db.appspot.com",
  messagingSenderId: "309650280147",
  appId: "1:309650280147:web:284fb96f3337f99a734e26",
  measurementId: "G-QH91CTKDCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)