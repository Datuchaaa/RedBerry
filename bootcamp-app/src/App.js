import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Add from "./pages/add/Add";
import Records from "./pages/records/Records";
import Laptopform from "./pages/laptopForm/Laptopform";
import Finish from "./pages/finish/Finish";
import Internalpage from "./pages/internalpage/Internalpage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/laptopform" element={<Laptopform />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/records" element={<Records />} />
          <Route exact path="/internal" element={<Internalpage />} />
          <Route exact path="/finish" element={<Finish />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
