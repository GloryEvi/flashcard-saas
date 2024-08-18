// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_qPWWP5GrLaH9X5GSuXInBHgXzUqfHOs",
  authDomain: "flashcardsaas-b7734.firebaseapp.com",
  projectId: "flashcardsaas-b7734",
  storageBucket: "flashcardsaas-b7734.appspot.com",
  messagingSenderId: "839610911963",
  appId: "1:839610911963:web:6da8bca826a8981ca6d0fe",
  measurementId: "G-5VTG8FJJMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
