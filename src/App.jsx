import React, { useState, useEffect } from "react";
import { login, logout } from "./store/authSlice";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";

import "./App.css";

import { Header, Footer } from "./components/index.js";

import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getUserAuthenticationState()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setloading(false));
  });

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-white">
      <div className="w-full block">
        <Header />
        <main className="h-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
