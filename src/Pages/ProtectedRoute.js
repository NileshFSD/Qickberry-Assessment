import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  let user = sessionStorage.getItem("token");
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
