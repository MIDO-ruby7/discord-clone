import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfaMDJn-JkH3ye_jEPmH70kZ4-qeM1CqM",
  authDomain: "discord-clone-b2770.firebaseapp.com",
  projectId: "discord-clone-b2770",
  storageBucket: "discord-clone-b2770.appspot.com",
  messagingSenderId: "8488751147",
  appId: "1:8488751147:web:bbcd79647d0e78f74d1a6e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };