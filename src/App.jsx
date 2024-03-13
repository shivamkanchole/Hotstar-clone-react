import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Scrollbar from "./Components/Scrollbar/Scrollbar.jsx";
import Production from "./Components/production_house/Production.jsx";
import MoviebyGener from './Components/GenerList/MoviebyGener.jsx'
function App() {
  return (
    <>
      <Header />
      <Scrollbar/>
      <Production/>
      <MoviebyGener/>
    </>
  );
}

export default App;
