import { useState } from "react";
import SearchForm from "./components/SearchForm";
import WeatherBoard from "./components/WeatherBoard";
import Day from "./models/day";

function App() {
  const day = [
    new Day('Monday', 'Riga', 12)
  ];

  const [cityData, setCityData] = useState<Day[]>([]);


  const onSearchHandler = (city: string) => {
    // get weather info from api\
    // add to dom
    // const newDay = new Day()
    // setCityData(newDay);
  };

  return (
    <div>
      <SearchForm onSearch={onSearchHandler} />
      <WeatherBoard items={cityData} />
    </div>
  );
}

export default App;
