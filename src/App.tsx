import './App.css'

import { initializeApp } from "firebase/app";
import { AppRoutes } from './AppRoutes';

const firebaseConfig = {
  apiKey: "AIzaSyDhGza0BUIHAYPlkY6YrLx4KSkVF54XYC4",
  authDomain: "zefer-interview.firebaseapp.com",
  databaseURL: "https://zefer-interview-default-rtdb.firebaseio.com",
  projectId: "zefer-interview",
  storageBucket: "zefer-interview.appspot.com",
  messagingSenderId: "681140573240",
  appId: "1:681140573240:web:df7ad1b8272f229a88c2cd",
  measurementId: "G-FEG30X6SFJ"
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
