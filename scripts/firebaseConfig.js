// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClFWIf49lDBnP2NFPti6gztv61Rx9Nfo8",
  authDomain: "login-17ee0.firebaseapp.com",
  projectId: "login-17ee0",
  storageBucket: "login-17ee0.firebasestorage.app",
  messagingSenderId: "217274790148",
  appId: "1:217274790148:web:c027e19ecd56b2f6642051",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
