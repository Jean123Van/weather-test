import React from "react";

function Landing(props) {
  const description =
    "Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city.";

  return (
    <div>
      <p>{description}</p>
      <button>Login</button>
    </div>
  );
}

export default Landing;
