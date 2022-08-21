import app from "../config/firebaseConfig";
import {
  getFirestore,
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  onSnapshot,
  where,
  updateDoc,
  increment,
} from "firebase/firestore";

const firestoreDB = getFirestore(app);

export {
  firestoreDB,
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  onSnapshot,
  where,
  updateDoc,
  increment,
};
