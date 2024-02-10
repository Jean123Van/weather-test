import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Home.css";
import "../../styles/button.css";

function Home(props) {
  const { name, nickname } = props.user;

  return (
    <div className="home-cntr">
      <h2>{name || nickname}</h2>
      <h3>{`https://github.com/${nickname}`}</h3>
      <div className="home-search">
        <input type="text" placeholder="City" />
        <FaSearch className="home-search-icon" />
      </div>
      <button className="button-primary">Display Weather</button>
    </div>
  );
}

export default Home;
