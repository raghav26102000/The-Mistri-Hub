// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR2hoEE4WBAT5gBRkWQ_7ikOeBPCN1GqI",
  authDomain: "the-mistri-hub-83d66.firebaseapp.com",
  projectId: "the-mistri-hub-83d66",
  storageBucket: "the-mistri-hub-83d66.appspot.com",
  messagingSenderId: "785374151657",
  appId: "1:785374151657:web:b9a42c4c3f04ed84804178"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };