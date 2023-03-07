import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedAuth = () => {
  let user = sessionStorage.getItem("token");
  return user ? <Navigate to={"/mainpage"} /> : <Outlet />;
};

export default ProtectedAuth;
