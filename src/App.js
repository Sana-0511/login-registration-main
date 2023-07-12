/*import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> }
      </div>
    </Router>
  );
}

export default App;*/
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropertyTable from "./components/propertytable";
import Login from "./components/login_component";
import SignUp from "./components/signup_component";
//import UserDetails from "./components/userDetails";
import Infoadd from "./components/infoadd_component";

function App() {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const [loggedIn, setLoggedIn] = useState(false);
  //const isLoggedIn = window.localStorage.getItem("loggedIn");

  const handleLogin = () => {
    setLoggedIn(true);
    window.localStorage.setItem("loggedIn", "true");
  };

  return (
    <Router>
      <div className="App">
        {loggedIn && (
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link className="navbar-brand text-white" to="/">
                AADYA VENTURES
              </Link>
              
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/propertytable">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/infoadd">
                      Info Add
                    </Link>
                  </li>
                  <li className="nav-item">
                  <button onClick={logOut} className="logout">
                   Log Out
                  </button>
                  </li>
                  
                </ul>
              </div>
            
          </nav>
        )}
    
        <Routes>
        <Route
            path="/"
            element={<Login handleLogin={handleLogin} />}
          />
        <Route
            path="/propertytable"
            element={loggedIn ? <PropertyTable /> : <Login handleLogin={handleLogin} />}
          />
          <Route path="/sign-in" element={<Login handleLogin={handleLogin} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/infoadd"
            element={loggedIn ? <Infoadd /> : <Login handleLogin={handleLogin} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
