// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAontESgkhjdBVt4jP08oYh2OvTJJfq8IM",
  authDomain: "bruinvoyage.firebaseapp.com",
  projectId: "bruinvoyage",
  storageBucket: "bruinvoyage.appspot.com",
  messagingSenderId: "698823194351",
  appId: "1:698823194351:web:24146aaf7fc38132c98d1a"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;