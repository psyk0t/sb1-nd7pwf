import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDa_v23zx_gINF-oMTOVPN-YJbBIBQSnhk",
  authDomain: "watch-6179a.firebaseapp.com",
  projectId: "watch-6179a",
  storageBucket: "watch-6179a.firebasestorage.app",
  messagingSenderId: "430584329690",
  appId: "1:430584329690:web:5579b3c6c97bd6ffa9fce3",
  measurementId: "G-24MRP8NP2M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);