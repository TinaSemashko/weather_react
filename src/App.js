import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Main defaultCity="Paris" />
        <footer>
          <p class="text-center mt-5">
            <em>
              This website was coded by{" "}
              <a
                href="https://startling-beijinho-552315.netlify.app/about.html"
                target="_blank"
                title="about me"
                rel="noreferrer"
              >
                Tina Semashko
              </a>
              , and is{" "}
              <a
                href="https://github.com/TinaSemashko/weather_react"
                target="_blank"
                title="github link that project"
                rel="noreferrer"
              >
                open-sourced on GitHub{" "}
              </a>
              and{" "}
              <a href="https://stately-sopapillas-d6d214.netlify.app/">
                hosted on Netlify
              </a>
            </em>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
