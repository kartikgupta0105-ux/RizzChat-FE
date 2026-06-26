// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBygXSJIsyxF8pc1fQG39O6SP9jAmGVeK8",
  authDomain: "auth-01-f8a13.firebaseapp.com",
  projectId: "auth-01-f8a13",
  storageBucket: "auth-01-f8a13.firebasestorage.app",
  messagingSenderId: "65685892105",
  appId: "1:65685892105:web:49741d1f7dd67f9d92dcd8",
  measurementId: "G-VM3DLGY09Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;