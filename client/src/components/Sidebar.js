import React from "react";

import NavBar from "./sidebar/NavBar";
import Filter from "./sidebar/Filter";

function Sidebar( { genres, technologies, currentUser, setCurrentUser } ){
  return (
    <div className="sidebar">
      <div id="sidebar-top">
        <h1>Check all Kind of website and books</h1>
        <hr></hr>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
      
     {/*<div id="sidebar-bottom">
        {<Filter genres={genres} technologies={technologies} />}
  </div> */}
      
    </div>
  )
}

export default Sidebar;