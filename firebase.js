import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDqEZ8XQh8W1UNMxYmV8ckUfHYvJp2ge1k",

  authDomain: "uber-clone-ddb16.firebaseapp.com",

  projectId: "uber-clone-ddb16",

  storageBucket: "uber-clone-ddb16.appspot.com",

  messagingSenderId: "1062829683379",

  appId: "1:1062829683379:web:3057427abacc8c0f9ab6c6"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };