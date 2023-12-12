import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header" style={{border: '1px solid orange'}}>
    <p>Your account will be reviewed shortly.<a id="ques">Know why</a> ✖️ </p>
  </div>
  );
}

export default Header;
