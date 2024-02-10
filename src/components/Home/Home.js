import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Home.css";
import "../../styles/button.css";
import axios from "axios";

function Home(props) {
  const { name, nickname } = props.user;
  const [city, setCity] = useState("");

  async function showWeather() {
    // const value = await axios({
    //   method: "GET",
    //   url: "http://api.openweathermap.org/geo/1.0/direct?q=london&appid=ccfab6ed8ffcb012dedbd4447d7f81bf",
    // }).catch(() => {
    //   throw new Error();
    // });

    console.log(city);

    // window.location.href = "/weather?long=1&lat=2";
  }

  return (
    <div className="home-cntr">
      <h2>{name || nickname}</h2>
      <h3>{`https://github.com/${nickname}`}</h3>
      <div className="home-search">
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <FaSearch className="home-search-icon" />
      </div>
      <button
        className="button-primary"
        onClick={() => {
          showWeather();
        }}
      >
        Display Weather
      </button>
    </div>
  );
}

export default Home;
