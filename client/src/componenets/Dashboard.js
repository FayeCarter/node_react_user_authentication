import React, { Fragment, useState, useEffect } from 'react';
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {

  const [name, setName] = useState("");

  const getName = async () => {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseData = await response.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    setAuth(false)
    toast.success("Logged out successfully")
  }  

  useEffect(() => {
    getName();
  }, []);


  return (
    <Fragment>
      <h1>Dashboard</h1>
      <h2>User: { name }</h2>
      <button 
        className="btn btn-primary"
        onClick={e => logout(e)} >Log out</button>
    </Fragment>
  );
};

export default Dashboard;

