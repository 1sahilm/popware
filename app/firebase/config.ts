import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNzWqFuchV7NxoiEGSXf30iZwTaBcztPI",
  authDomain: "eduxll-a436b.firebaseapp.com",
  projectId: "eduxll-a436b",
  storageBucket: "eduxll-a436b.appspot.com",
  messagingSenderId: "904930856422",
  appId: "1:904930856422:web:f81e34130b2ddf8994da27",
  // measurementId: "G-FKD1G34VY8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
