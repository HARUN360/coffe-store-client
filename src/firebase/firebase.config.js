// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQcTZrAENI4yhW0lZJzAIVTtYetsr7cQ",
  authDomain: "bhai-ata-test-project.firebaseapp.com",
  projectId: "bhai-ata-test-project",
  storageBucket: "bhai-ata-test-project.appspot.com",
  messagingSenderId: "672301033191",
  appId: "1:672301033191:web:9b9e190926272899aaa442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
