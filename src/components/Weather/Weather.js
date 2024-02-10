import React from "react";
import { useLocation } from "react-router-dom";

function Weather(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const long = queryParams.get("long");
  const lat = queryParams.get("lat");

  console.log(long);
  console.log(lat);

  return <div>weather</div>;
}

export default Weather;
