import React from "react";
import "./styles.css";
import Weather from "./Weather";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>
        {" "}
        Weather Search Engine
        <span role="img" aria-label="weather">
          🌤️
        </span>
      </h1>
      <Search />
      <div className="footer">
      <a
        href="https://github.com/elidelmar/weather-app-react"
        target="_blank"
        rel="noreferrer"
      >{" "}Open-Source Code</a>
        &nbsp; by Elisabeth Marquez</div>
  </div>
  </div>
  );
}