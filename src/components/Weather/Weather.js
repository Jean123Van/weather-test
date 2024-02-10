import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Weather.css";
import "../../styles/button.css";

function Weather(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const city = queryParams.get("city");

  async function fetchWeather() {
    const value = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2a14c2c6a798c6f44b3081f334b44d7f&units=metric`,
    }).catch(() => {});

    console.log(value);
  }

  fetchWeather();

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
            <td>1</td>
            <td>1</td>
            <td>1</td>
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
