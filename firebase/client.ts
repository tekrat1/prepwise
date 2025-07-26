// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_lk7VWXPPS74_94B4T6jJJh1nrx53__k",
  authDomain: "prepwise-541d4.firebaseapp.com",
  projectId: "prepwise-541d4",
  storageBucket: "prepwise-541d4.firebasestorage.app",
  messagingSenderId: "114312969929",
  appId: "1:114312969929:web:22480b7da42cd9e1d8d718",
  measurementId: "G-J7NKY65NSM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
