import React from "react";
import "./Landing.css";
import "../../styles/button.css";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../Home/Home";

function Landing(props) {
  const description =
    "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.";

  const { loginWithRedirect, isAuthenticated, user, isLoading } = useAuth0();

  if (isLoading) {
    return <div></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="landing-cntr">
        <p>{description}</p>
        <button
          className="button-primary"
          onClick={() => loginWithRedirect({ connection: "github" })}
        >
          Login
        </button>
      </div>
    );
  }

  return <Home user={user} />;
}

export default Landing;
