import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd9S3ANCgje_k1_hLM6zhmRTwvbIA14Z4",
  authDomain: "vitets-contact.firebaseapp.com",
  projectId: "vitets-contact",
  storageBucket: "vitets-contact.firebasestorage.app",
  messagingSenderId: "552265608958",
  appId: "1:552265608958:web:720ae179c300945ee6bfaf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
