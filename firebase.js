import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLGbabv-bh7O51iHqwz92cPnOdzvT9GOU",
  authDomain: "uber-next-clone-e7137.firebaseapp.com",
  projectId: "uber-next-clone-e7137",
  storageBucket: "uber-next-clone-e7137.appspot.com",
  messagingSenderId: "533223835873",
  appId: "1:533223835873:web:76c8c2eccab0093e750fa0",
  measurementId: "G-8LLNW75SP4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
