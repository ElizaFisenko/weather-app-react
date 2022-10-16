import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <Weather />
      </div>
      <a href='https://github.com/ElizaFisenko/weather-app-react' target="_blank" rel="noreferrer">Open-source code</a>
    </div>
  );
}

export default App;
