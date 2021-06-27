import './App.css';
import WeatherFetch from './components/fetch';

function App() {
  return (
    <div className="App">
      <h1>Goal: Using Typescript, create a class component and a functional component.</h1>
      <p>The class component should reach out to the geolocation API and grab coordiates</p>
      <p>Then using those coordinates, reach oput to the open weather api and retrieve the weather information for your area.</p>
      <p>Once you have the weather, it should be sent to the functional component to be displayed.</p>    
    <WeatherFetch />
    </div>
  );
}

export default App;
