import React from "react";
import UserLayout from "./components/Layout/UserLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPages from "./pages/CollectionPages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPages />}
            />
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
