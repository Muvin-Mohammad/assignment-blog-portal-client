import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1x35eHk4Xxrvjwm_mwqLBhmiF67UqSM",
  authDomain: "blog-3ef74.firebaseapp.com",
  projectId: "blog-3ef74",
  storageBucket: "blog-3ef74.firebasestorage.app",
  messagingSenderId: "928455157257",
  appId: "1:928455157257:web:673ff0e81ae9aedfe8fad8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;