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

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import Infoadd from "./components/infoadd_component";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <Router>
      <div className="App">
        {isLoggedIn === "true" && (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/userDetails">
                      User Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/infoadd">
                      Info Add
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/userDetails"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route
            path="/infoadd"
            element={isLoggedIn === "true" ? <Infoadd /> : <Login />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
