
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './components/home/home.jsx';
import InfoPelicula from "./components/infopelicula/infopelicula.jsx";
import Barranavegacion from './components/navbar/barranavegacion.jsx';
import Peliculas from "./components/peliculas/peliculas.jsx";


function App() {
  return (
    <div className="App">
      <Barranavegacion/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/infopelicula/:id/:title" element={ <InfoPelicula /> } />
        <Route path="/peliculas" element={ <Peliculas /> } />
        <Route path ="*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
