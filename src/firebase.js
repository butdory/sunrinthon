// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJvPtsv_uNghrN0YNFrZEGGRVRhQjb_0s",
  authDomain: "sunrinthon-2dc09.firebaseapp.com",
  projectId: "sunrinthon-2dc09",
  storageBucket: "sunrinthon-2dc09.appspot.com",
  messagingSenderId: "356028984881",
  appId: "1:356028984881:web:6291b6a70136d8fc5f2f10",
  measurementId: "G-0VCS61YGF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);