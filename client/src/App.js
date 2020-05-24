import React, { Fragment, useState, useEffect } from 'react';
import './App.css';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

//componenets
import Dashboard from "./componenets/Dashboard"
import Login from "./componenets/Login"
import Register from "./componenets/Register"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: {
          token: localStorage.token
        }
      });

      const parsRes = await response.json();
      parsRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)
       
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    isAuth()
  })

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route 
              exact 
              path = "/login" 
              render = { props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : ( 
                  <Redirect to="/dashboard" />
                )
              }
            />
            <Route 
              exact 
              path = "/register" 
              render = { props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth}  />
                ) : ( 
                  <Redirect to="/login" />
                )
              }
            />
            <Route 
              exact 
              path = "/dashboard" 
              render = { props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth}  />
                ) : ( 
                  <Redirect to="/login" />
                )
            }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
