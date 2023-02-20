    import React,{useState} from 'react';
    import {Link}  from 'react-router-dom';
    import Profile from './Profile.js';
import Post from './Post.js';
import Gallery from './Gallery.js';
import Todo from './Todo.js';
import { useParams, useLocation} from "react-router-dom";
import { getUsersData } from "../../service/service.js";
    const Navdata=()=>{
        const [userprofile, setUserProfile] = useState();
        const params = useParams();
  console.log(params)
  const location = useLocation();
  const getUserProfile = async () => {
    const users = await getUsersData();
    const loggedInuser = users.find((user) => user.id === +params.id);
    setUserProfile(loggedInuser);
  };
    return(
        <nav>
        <ul>
       <Link  className="Link" to={`/profile/${params.id}`} > Profile</Link>
      <Link className="Link" to={`/post/${params.id}`}>Posts</Link>
     <Link  className="Link" to={`/gallery/${params.id}`} >Gallery</Link>
        <Link className="Link" to={`/todo/${params.id}`}> Todo</Link>
        </ul>
    </nav>
    )
    }
    export default Navdata;