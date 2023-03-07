import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ setIsSignUpForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    if (user.username === username) {
      if (user.password === password) {
        sessionStorage.setItem("token", username);
        toast.success("User login successfully");
        navigate("/mainpage");
        e.target.reset();
      } else {
        toast.warn("please enter correct password");
      }
    } else {
      toast.warn("please enter valid username");
    }
  }

  return (
    <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
      <ToastContainer position="top-left" />
      <form onSubmit={handleLogin} className="form">
        <h2 className="registration-from">Login</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">
          Login
        </button>
        <h2>
          Not yet registered?{" "}
          <Link to="/">
            <span className="link">Click here to Register</span>
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
