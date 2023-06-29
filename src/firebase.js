import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7AAOndY-5BSL6R81NfCHtZFtcZmSAWS4",
  authDomain: "quickchat-33619.firebaseapp.com",
  projectId: "quickchat-33619",
  storageBucket: "quickchat-33619.appspot.com",
  messagingSenderId: "256098068797",
  appId: "1:256098068797:web:85bd9b55423b8e19d73d54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
