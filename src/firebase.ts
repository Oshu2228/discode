import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjnotIGaNq-VOW6a1fjO0xSAm66CuCwFg",
  authDomain: "discode-clone-c7417.firebaseapp.com",
  projectId: "discode-clone-c7417",
  storageBucket: "discode-clone-c7417.appspot.com",
  messagingSenderId: "256623607136",
  appId: "1:256623607136:web:7601563b4f8a772b513205",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
