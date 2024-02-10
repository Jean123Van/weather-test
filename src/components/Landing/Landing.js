import React from "react";
import "./Landing.css";
import { useAuth0 } from "@auth0/auth0-react";

function Landing(props) {
  const description =
    "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.";

  const { loginWithPopup } = useAuth0();

  return (
    <div className="landing-cntr">
      <p>{description}</p>
      <button onClick={() => loginWithPopup({ connection: "github" })}>
        Login
      </button>
    </div>
  );
}

export default Landing;
