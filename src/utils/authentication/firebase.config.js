// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt04km7DqYysNTwlhYLS6xQMi9tYAw7k4",
  authDomain: "lambang-daerah.firebaseapp.com",
  projectId: "lambang-daerah",
  storageBucket: "lambang-daerah.appspot.com",
  messagingSenderId: "991222440329",
  appId: "1:991222440329:web:931dbb22e64ebce3354158",
  measurementId: "G-GMDEF1NHJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
