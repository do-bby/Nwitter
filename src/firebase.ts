import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDuCx3OUq_aCUoZxw2HI7xiELRVqzk9Uo",
  authDomain: "nwitter-project-2a282.firebaseapp.com",
  projectId: "nwitter-project-2a282",
  storageBucket: "nwitter-project-2a282.appspot.com",
  messagingSenderId: "523925232779",
  appId: "1:523925232779:web:4c9963324f836971e6888e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);