import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Main defaultCity="Paris" />
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
