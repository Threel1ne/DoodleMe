import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./Start";
import Lobby from "./Lobby";

function App() {
  return (
    <Router>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </Router>
  );
}

export default App;
