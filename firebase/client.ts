import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp0J4POgIgr4Y67wSoRjh9nYqSk8cT_7g",
  authDomain: "prepwise-f158f.firebaseapp.com",
  projectId: "prepwise-f158f",
  storageBucket: "prepwise-f158f.firebasestorage.app",
  messagingSenderId: "662426015875",
  appId: "1:662426015875:web:923650280b2d3df679a3b6",
  measurementId: "G-KK19S96Z2Z",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
