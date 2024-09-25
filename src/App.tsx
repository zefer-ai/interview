import './App.css'

import { initializeApp } from "firebase/app";
import { AppRoutes } from './AppRoutes';

const firebaseConfig = {
  apiKey: "AIzaSyDhGza0BUIHAYPlkY6YrLx4KSkVF54XYC4",
  authDomain: "zefer-interview.firebaseapp.com",
  projectId: "zefer-interview",
  storageBucket: "zefer-interview.appspot.com",
  messagingSenderId: "681140573240",
  appId: "1:681140573240:web:9c82f70cdc2742d088c2cd",
  measurementId: "G-WYJ3Z23V6T"
};

// Initialize Firebase
initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
