import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBNW72x1WR00SktTyRtJOzp6t-k-9e3c",
  authDomain: "bookcourier-9241b.firebaseapp.com",
  projectId: "bookcourier-9241b",
  storageBucket: "bookcourier-9241b.firebasestorage.app",
  messagingSenderId: "54495839170",
  appId: "1:54495839170:web:fc88bf142822ba11d8cc5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
