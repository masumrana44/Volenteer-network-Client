import React, { useContext } from "react";
import { UserContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(UserContext);
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
