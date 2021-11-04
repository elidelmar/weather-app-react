import React from "react";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>
        {" "}
        Weather Search Engine
        <span role="img" aria-label="weather">
          🌤️
        </span>
      </h1>
      <Search />
    </div>
  );
}