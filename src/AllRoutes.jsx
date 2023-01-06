import React from "react";
import { Routes, Route } from "react-router-dom";
import AllLang from "./Pages/AllLang";
import Css from "./Pages/Css";
import Html from "./Pages/Html";
import Javascript from "./Pages/Javascript";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllLang />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javaScript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
