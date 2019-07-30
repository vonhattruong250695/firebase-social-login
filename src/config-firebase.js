import firebase from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyCPGtSQ32KRm3VCgGpXnvLpCWZhQ9AcLco",
  authDomain: "top-sinh-vien.firebaseapp.com",
  databaseURL: "https://top-sinh-vien.firebaseio.com",
  projectId: "top-sinh-vien",
  storageBucket: "",
  messagingSenderId: "193263359672",
  appId: "1:193263359672:web:e552f37810398731"
};
// Initialize Firebase
export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());

