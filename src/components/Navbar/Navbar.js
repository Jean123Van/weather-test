import React from "react";
import "./Navbar.css";
import { FaCloudSunRain } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar-cntr">
      <Link to="/">
        <FaCloudSunRain className="navbar-logo" />
      </Link>
      <h1>Weather Forecast</h1>
    </div>
  );
}

export default Navbar;
