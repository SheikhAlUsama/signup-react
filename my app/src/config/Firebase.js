import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDwnMPBLrIYwJhP3EvYN7VO5kBgmNv8OzA',
  authDomain: 'todo-list-b2443.firebaseapp.com',
  databaseURL: 'https://todo-list-b2443-default-rtdb.firebaseio.com',
  projectId: 'todo-list-b2443',
  storageBucket: 'todo-list-b2443.appspot.com',
  messagingSenderId: '98826718989',
  appId: '1:98826718989:web:9088b6970ea57aaffa6a44',
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
