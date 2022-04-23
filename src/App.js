import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/home/Home";
import Details from "./routes/details/Details";
import NotFound from "./routes/notFound/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="/details/:id"
            element={<Details/>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
