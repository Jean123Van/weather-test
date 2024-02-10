import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Weather.css";
import "../../styles/button.css";
import { useAuth0 } from "@auth0/auth0-react";

function Weather(props) {
  const { isLoading, isAuthenticated } = useAuth0();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const city = queryParams.get("city");

  async function fetchWeather() {
    const value = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a14c2c6a798c6f44b3081f334b44d7f&units=metric`,
    }).catch(() => {});

    setData(value.data);

    setIsDataLoading(false);
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  if (isLoading || isDataLoading) {
    return <div></div>;
  }

  if (!isAuthenticated) {
    window.location.href = "/";
  }

  return (
    <div className="weather-cntr">
      <table className="weather-table">
        <thead>
          <tr className="table-header">
            <th>
              Date <br />
              (mm/dd/yyyy)
            </th>
            <th>
              Temp
              <br /> (F)
            </th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {new Date().toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })}
            </td>
            <td>{data.main.temp}</td>
            <td>{data.weather[0].description}</td>
            <td>{data.weather[0].main}</td>
            <td>{data.main.pressure}</td>
            <td>{data.main.humidity}</td>
          </tr>
        </tbody>
      </table>
      <button
        className="button-primary"
        onClick={() => {
          window.history.back();
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Weather;
