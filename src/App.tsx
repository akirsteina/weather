import SearchForm from "./components/SearchForm";
import WeatherBoard from "./components/WeatherBoard";
import Day from "./models/day";

function App() {
  const days = [
    new Day('Monday', 12),
    new Day('Tuesday', 15)
  ];

  const onSearchHandler = (city: string) => { };
  
  return (
    <div>
      <SearchForm onSearch={onSearchHandler} />
      <WeatherBoard items={days} />
    </div>
  );
}

export default App;
