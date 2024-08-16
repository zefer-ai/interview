import './App.css'

import { initializeApp } from "firebase/app";
import { AppRoutes } from './AppRoutes';

const firebaseConfig = {
  // FILL ME
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
