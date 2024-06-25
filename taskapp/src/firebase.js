// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiyfWuG8Bv7HSpN5yJs-MM5SnpbkzpuNI",
  authDomain: "taskmanager-377bd.firebaseapp.com",
  projectId: "taskmanager-377bd",
  storageBucket: "taskmanager-377bd.appspot.com",
  messagingSenderId: "538160446462",
  appId: "1:538160446462:web:89870ef2e251233655deaf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTask = async (task) => {
  await addDoc(collection(db, "tasks"), task);
};

export const updateTask = async (id, task) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, task);
};

export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};