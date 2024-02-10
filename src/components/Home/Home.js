import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./Home.css";
import "../../styles/button.css";
import axios from "axios";

function Home(props) {
  const { name, nickname } = props.user;
  const [city, setCity] = useState("");
  const [isShowError, setIsShowError] = useState(false);

  async function showWeather() {
    const value = await axios({
      method: "GET",
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=ccfab6ed8ffcb012dedbd4447d7f81bf`,
    }).catch(() => {
      throw new Error();
    });

    if (value.data.length === 0) {
      setIsShowError(true);
      return;
    }

    window.location.href = `/weather?city=${city}`;
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
      {isShowError ? (
        <p style={{ color: "red" }}>City does not exist. Please try again</p>
      ) : (
        <div></div>
      )}
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
