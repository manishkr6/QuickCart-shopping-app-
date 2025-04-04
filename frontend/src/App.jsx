import React from "react";
import UserLayout from "./components/Layout/UserLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="/admin" element={<UserLayout />}>
            {/* AdminLayout */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
