// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCTGeSStS_uugRq9zmv8PxatKXsH1EcCL8",
  authDomain: "fir-e0e0f.firebaseapp.com",
  databaseURL: "https://fir-e0e0f.firebaseio.com",
  projectId: "fir-e0e0f",
  storageBucket: "fir-e0e0f.appspot.com",
  messagingSenderId: "938889071232",
  appId: "1:938889071232:web:510ab4c158a227b846b465",
  measurementId: "G-1J1VXRTWVS",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
