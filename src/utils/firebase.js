// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPpNEC11kj-01P-fxZweQuQHVG15JyTcU",
  authDomain: "watchflixgpt-40202.firebaseapp.com",
  projectId: "watchflixgpt-40202",
  storageBucket: "watchflixgpt-40202.appspot.com",
  messagingSenderId: "691903530207",
  appId: "1:691903530207:web:ac3e1a587c689ef763556a",
  measurementId: "G-E07BEP3X0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();