import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <footer>
          <a
            href="https://github.com/joriola/weather-app-react"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Open-source code
          </a>
          <span> by Jasmine Oriola</span>
        </footer>
      </div>
    </div>
  );
}
