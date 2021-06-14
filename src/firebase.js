import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJgjC6C8COYiA7yQXc19MxxX4Km7vVV-E",
  authDomain: "slack-eb5f4.firebaseapp.com",
  databaseURL: "https://slack-eb5f4-default-rtdb.firebaseio.com",
  projectId: "slack-eb5f4",
  storageBucket: "slack-eb5f4.appspot.com",
  messagingSenderId: "95423003794",
  appId: "1:95423003794:web:87423e507c0c9d9088ba4b",
  measurementId: "G-BFDJDSDC5V",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase;
