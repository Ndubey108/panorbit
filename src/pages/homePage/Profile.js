
import { useParams, useLocation, BrowserRouter } from "react-router-dom";

import { getUsersData } from "../../service/service.js";
import ReactDOM from "react-dom";
import "./profile.css";

import Modal from "../Modal/Modal.jsx";

import { Link,Routes,Route } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import './profile.css';
import Navdata from "./Navdata.js";
import HeaderData from "./HeaderData.js";
const Profile = () => {
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
        <div className="mainright">
          <div className="top">
            <img  src={userprofile?.profilepicture}  alt="img"/>
            <p className="value textcenter">{userprofile?.name}</p>
            <p><span className="key">Username   :</span>    <span className="value">{userprofile?.username}</span></p>
            <p><span className="key">e-mail    :</span>   <span className="value">{userprofile?.email}</span></p>
            <p><span className="key">Phone      :</span>    <span className="value">{userprofile?.phone}</span></p>
            <p><span className="key">Website    :</span>    <span className="value">{userprofile?.website}</span></p>
          </div>
          <div className="bottom">
          <p className="key textcenter">company</p>
            <p><span className="key">Name   :</span>    <span className="value">{userprofile?.company?.name}</span></p>
            <p><span className="key">catchPhrase  :</span>  <span className="value">{userprofile?.company?.catchPhrase}</span></p>
            <p><span className="key">bs     :</span>    <span className="value">{userprofile?.company?.bs}</span></p>
          </div>
        </div>

        <div className="mainleft">
        <h3 className="key textleft">Address:</h3>
            <p><span className="key">Street  :</span>    <span className="value">{userprofile?.address?.street}</span></p>
            <p><span className="key">Suite     :</span>   <span className="value">{userprofile?.address?.suite}</span></p>
            <p><span className="key">City     :</span>    <span className="value">{userprofile?.address?.city}</span></p>
            <p><span className="key">Zipcode    :</span>    <span className="value">{userprofile?.address?.zipcode}</span></p>
    
        </div>
        
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
export default Profile;
