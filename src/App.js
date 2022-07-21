import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search.js";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container cont-small pt-2 pb-5 ">
        <h1>Weather search engine</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
