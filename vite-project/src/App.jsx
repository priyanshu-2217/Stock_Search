import { Routes, Route } from "react-router-dom";
import React from "react";

import Stock from "./Component/stock";
import StockDetails from "./Component/StockDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Stock />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
      </Routes>
    </>
  );
}

export default App;
