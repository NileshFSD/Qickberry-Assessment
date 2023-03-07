import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
    toast.success("User logout successfully");
  };
  return (
    <>
      <div className="dashboard">
        <button onClick={handleLogout} className="logOut-btn ">
          LogOut
        </button>
        <Link to="/post">
          <div className="bg-gray-300 hover:bg-slate-400 ">See Post</div>
        </Link>
        <Link to="/pictures">
          <div className="bg-gray-300 hover:bg-slate-400">See Photos</div>
        </Link>
      </div>
      <ToastContainer position="top-left" />
    </>
  );
};

export default MainPage;
