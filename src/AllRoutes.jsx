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
        <Route path="/gitstar/" element={<AllLang />} />
        <Route path="/gitstar/html" element={<Html />} />
        <Route path="/gitstar/css" element={<Css />} />
        <Route path="/gitstar/javaScript" element={<Javascript />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
