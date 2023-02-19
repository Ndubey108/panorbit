    import React from 'react';
    import {Link}  from 'react-router-dom';
    import Profile from './Profile.js';
import Post from './Post.js';
import Gallery from './Gallery.js';
import Todo from './Todo.js';
    const Navdata=()=>{
    return(
        <nav>
        <ul>
       <Link  className="Link" to="/profile" index> Profile</Link>
      <Link className="Link" to="/post">Posts</Link>
     <Link  className="Link" to="/gallery" >Gallery</Link>
        <Link className="Link" to="/todo"> Todo</Link>
        </ul>
    </nav>
    )
    }
    export default Navdata;