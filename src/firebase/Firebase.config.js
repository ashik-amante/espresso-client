// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-i7VF9HK-6h_RQ3xudM6-ln9W-eEadz8",
  authDomain: "espresso-5ae12.firebaseapp.com",
  projectId: "espresso-5ae12",
  storageBucket: "espresso-5ae12.firebasestorage.app",
  messagingSenderId: "99375864596",
  appId: "1:99375864596:web:1f4a26bfb1cd5b8a580001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;