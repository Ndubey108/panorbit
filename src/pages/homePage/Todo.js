
import { useParams, useLocation, BrowserRouter } from "react-router-dom";

import { getUsersData } from "../../service/service.js";
import ReactDOM from "react-dom";
import "./homePage.css";

import Modal from "../Modal/Modal.jsx";

import { Link,Routes,Route,useNavigate } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import './profile.css';
import Navdata from "./Navdata.js";
import HeaderData from "./HeaderData.js";

const Todo = () => {
  const [userprofile, setUserProfile] = useState();
  const [showModal, setShowModal] = useState(false);
  const navigate=useNavigate();
  const params = useParams();
  console.log(params)
  const location = useLocation();
  const getUserProfile = async () => {
    const users = await getUsersData();
    const loggedInuser = users.find((user) => user.id === +params.id);
    setUserProfile(loggedInuser);
  };

  const openModal = () => {
    setShowModal(!showModal);
   
  };
 

  const closeModal = () => {
    // setShowModal(false);
    navigate("/");
  };

  useEffect(() => {
    if (!location.state) {
      getUserProfile();
    } else {
      setUserProfile(location.state);
    }
  }, [params, location.state]);
 
  return (
    <div className="container">
      <Navdata/>
      <div className="right">
       <HeaderData userprofile={userprofile} openModal={openModal}/>
       
        <main>
      coming soon
        
      </main>
    
      
             
        
       {/* <Profile userprofile={userprofile}/> */}
      </div>
      {showModal &&
        
        ReactDOM.createPortal(
          <Modal data={userprofile} closeModal={closeModal} ></Modal>,
          document.getElementById("modal-root")
        )}
    </div>
  );
};
export default Todo;
