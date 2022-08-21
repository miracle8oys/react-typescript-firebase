import React from "react";
import Login from "./components/Login";
import { UserContext, defaultData } from "./utility/userData";
import { UserInfo } from "firebase/auth";
import Home from "./pages/Home";
import { useState } from "react";
import { auth } from "./utility/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Merchant from "./pages/Merchant";

function App() {
  const [userData, setUserData] = useState<UserInfo>(defaultData);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUserData(currentUser);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={userData}>
          <header className="container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/merchant" element={<Merchant />} />
            </Routes>
          </header>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
