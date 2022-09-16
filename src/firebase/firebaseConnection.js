// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsV29vh-K7bbDnkZSeG2OGACsKRFiUP2U",
  authDomain: "aula01-a25ea.firebaseapp.com",
  databaseURL: "https://aula01-a25ea-default-rtdb.firebaseio.com",
  projectId: "aula01-a25ea",
  storageBucket: "aula01-a25ea.appspot.com",
  messagingSenderId: "994833202387",
  appId: "1:994833202387:web:3126b45b6e24a9fc3ea826",
  measurementId: "G-4EB5KT162Z"
};

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;