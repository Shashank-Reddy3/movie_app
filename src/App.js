import React from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
