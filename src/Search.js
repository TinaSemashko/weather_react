import React, { useState } from "react";
import Weather from "./Weather";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [element, setElement] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setElement(<Weather city={city} />);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <div className="ad">{element}</div>
    </div>
  );
}
