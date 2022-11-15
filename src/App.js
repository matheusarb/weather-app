import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    
    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)

  };

  const loadOptions = (inputValue) => {};

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
