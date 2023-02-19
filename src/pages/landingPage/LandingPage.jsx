import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersData } from "../../service/service";

import "./landingPage.css";
function LandingPage() {
 const [users, setUsers] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    const getUsers = async () => {
      const users = await getUsersData();
      setUsers(users);
    };
    getUsers();
  }, []);

  const getUserProfile = (id) => {
    const userData = [...users].find((user) => user.id === id);
    return userData;
  };
  const redirect = (id) => {
    const userData = getUserProfile(id);
    navigate(`/info/${id}`, { state: userData });
  };

  return (
    <>
    <div className="root">
    <div className="root1"></div>
    <div className="bg">
      <div className="header">Select an account</div>
      <ul className="box">
        {users.map((user) => {
          return (
            <li key={user.id} onClick={() => redirect(user.id)}>
              <img src={user.profilepicture} alt="image" />
              <p>{user.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
    
    </>
  );
}

export default LandingPage;

