import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Iconos from "./components/Iconos";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/listado" element={<Listado/>} />
        </Routes>
      </Router>
      <Iconos/>
</div>
);
}

export default App;
