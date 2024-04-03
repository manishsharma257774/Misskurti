import React from "react";
import Home from "./Components/Home";
import KurtaSet from "./Components/KurtaSet";
import TopsTunics from "./Components/TopsTunics";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/KurtaSet" element={<KurtaSet />} />
          <Route exact path="/Topstunics" element={<TopsTunics />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}
