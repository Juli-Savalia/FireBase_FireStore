import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import View from "./pages/View";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Add></Add>}></Route>
          <Route path="/View" element={<View></View>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
