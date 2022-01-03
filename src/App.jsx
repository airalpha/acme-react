import React from 'react';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import {AuthProvider} from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import {ThemeProvider} from "@mui/material";
import theme from "./themes";

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Header/>
          <div className="body">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="login" element={<LoginRoute><Login/></LoginRoute>}/>
              <Route path="register" element={<LoginRoute><Register/></LoginRoute>}/>
              <Route path="dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            </Routes>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
