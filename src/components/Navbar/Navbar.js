import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../../styles/button.css";
import { FaCloudSunRain } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar(props) {
  const { logout, isLoading, isAuthenticated } = useAuth0();

  let display = isAuthenticated ? "inline" : "none";
  // const [isMobileView, setIsMobileView] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", (e) => {
  //     console.log(isMobileView);
  //     if (e.currentTarget.innerWidth >= 490) {
  //       if (isMobileView === true) {
  //         setIsMobileView(false);
  //       }
  //     }

  //     if (e.currentTarget.innerWidth < 490) {
  //       if (isMobileView === false) {
  //         setIsMobileView(true);
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div className="navbar-cntr">
      <Link to="/">
        <FaCloudSunRain className="navbar-logo" />
      </Link>
      <h1>Weather Forecast</h1>
      <button
        className="button-primary button-logout"
        style={{ display: display }}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
