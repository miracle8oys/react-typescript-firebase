// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4NOfqehvDtWU0san0hIsT6rN3BBNPTwo",
  authDomain: "shoping-queue.firebaseapp.com",
  projectId: "shoping-queue",
  storageBucket: "shoping-queue.appspot.com",
  messagingSenderId: "210033663959",
  appId: "1:210033663959:web:a01ad281113ddf556fb592",
  measurementId: "G-6TPM625DHQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
