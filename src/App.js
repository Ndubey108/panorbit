import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage.jsx";
import LandingPage from "./pages/landingPage/LandingPage.jsx";
import Profile from './pages/homePage/Profile.js';
import Post from './pages/homePage/Post.js';
import Gallery from './pages/homePage/Gallery.js';
import Todo from './pages/homePage/Todo.js';
import './App.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/info/:id" element={<HomePage />} />
       <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/post" element={<Post/>}></Route>
            <Route path="/gallery" element={<Gallery/>}></Route>
            <Route path="/todo" element={<Todo/>}></Route>
         </Routes>
   
     
         
         
    </div>
  );
}

export default App;
