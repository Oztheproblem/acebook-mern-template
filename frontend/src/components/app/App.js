import "./App.css";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import SinglePost from "../singlePost/SinglePost";
import React, { useState } from "react";
import Feed from "../feed/Feed";
import { useNavigate, Routes, Route } from "react-router-dom";
import Navbar from './navbar.js';
import './navbar.css';


const App = () => {
  return (
  <div>
    <Navbar />
    <Routes>
      <Route
        path="/posts/:id"
        element={<SinglePost navigate={useNavigate()} />}
      />
      <Route path="/posts" element={<Feed navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
      <Route path="/signup" element={<SignUpForm navigate={useNavigate()} />} />
    </Routes>
    </div>
  );
};

export default App;
