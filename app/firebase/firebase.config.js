import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDy_CohXC_FBzKD7lFrsJMPi3HF7aWxaqE",
  authDomain: "wednesday-project-5728c.firebaseapp.com",
  projectId: "wednesday-project-5728c",
  storageBucket: "wednesday-project-5728c.appspot.com",
  messagingSenderId: "348266683752",
  appId: "1:348266683752:web:0879151dd5dd73aade8add"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);