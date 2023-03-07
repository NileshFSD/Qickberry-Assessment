import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "./Login.js";

const Registration = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handleRegistration(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(data));

    toast.success("User registered successfully, please login");
    navigate("/login");
    e.target.reset();
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <ToastContainer position="top-left" />
      {/* {isSignUpForm ? ( */}
      <div className="w-screen h-screen bg-gray-200 flex flex-col justify-center items-center">
        <form onSubmit={handleRegistration} className="form">
          <h2 className="registration-from">Registration</h2>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit">
            Sign-Up
          </button>
          <h2>
            Already registered?
            <Link to="/login">
              <span className="link">Click here to Login</span>
            </Link>
          </h2>
        </form>
      </div>
    </>
  );
};

export default Registration;
