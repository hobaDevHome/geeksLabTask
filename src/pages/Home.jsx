import React from "react";
import { Route, Routes } from "react-router-dom";
import Alerts from "./Alerts";
import Automation from "./Automation";
import Portfolio from "./Portfolio";
import Trading from "./Trading";
import Training from "./Training";

function Home() {
  return (
    <Routes>
      <Route index element={<Alerts />} />

      <Route path="/automation" element={<Automation />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/trading" element={<Trading />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
}

export default Home;
