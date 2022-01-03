import React from 'react';
import {useAuthContext} from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import {Navigate} from "react-router-dom";

const LoginRoute = ({children}) => {
  const {logged} = useAuthContext();

  return (
   !logged ? children : <Navigate to={"/dashboard"} />
  );
};

export default LoginRoute;
