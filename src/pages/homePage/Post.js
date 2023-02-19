
import { useParams, useLocation, BrowserRouter } from "react-router-dom";

import { getUsersData } from "../../service/service.js";
import ReactDOM from "react-dom";
import "./homePage.css";

import Modal from "../Modal/Modal.jsx";

import { Link,Routes,Route } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import './profile.css';
import Navdata from "./Navdata.js";
import HeaderData from "./HeaderData.js";
const Post = () => {
  const [userprofile, setUserProfile] = useState();
  const [showModal, setShowModal] = useState(false);

  const params = useParams();
  const location = useLocation();
  const getUserProfile = async () => {
    const users = await getUsersData();
    const loggedInuser = users.find((user) => user.id === +params.id);
    setUserProfile(loggedInuser);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
     coming soon.
        
      </main>
    
      
             
        
       {/* <Profile userprofile={userprofile}/> */}
      </div>
      {showModal &&
        
        ReactDOM.createPortal(
          <Modal data={userprofile} closeModal={closeModal}></Modal>,
          document.getElementById("modal-root")
        )}
    </div>
  );
};
export default Post;
