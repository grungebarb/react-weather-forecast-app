import './App.css';
import WeatherApp from './WeatherApp';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <WeatherApp defaultCity="Moralzarzal" />
          <small>
            <a
              href="https://github.com/grungebarb/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source code
            </a> by <span title="Bárbara Llansó Di Renzo">GrungeBarb</span> and <a href="https://trusting-noether-3e107a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer">hosted on Netlify</a>
          </small>
        </div>
      </div>
    </div>
  );
}

