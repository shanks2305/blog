import firebase from "firebase";
import "firebase/storage";
import "firebase/database";

let firebaseConfig = {
  apiKey: "AIzaSyB984EW4VeIOA0phqQ6AtGdM8EM5E1y4eg",
  authDomain: "blog-730e6.firebaseapp.com",
  databaseURL: "https://blog-730e6.firebaseio.com",
  projectId: "blog-730e6",
  storageBucket: "blog-730e6.appspot.com",
  messagingSenderId: "630863330793",
  appId: "1:630863330793:web:5f11d9cb1241bc4fe59f78",
  measurementId: "G-N9WRSRHFHK",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseAuth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();
