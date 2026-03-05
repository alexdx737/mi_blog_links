import profile from './fotocv.jpg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from "./Descargas";
import Parcial2 from "./Parcial2"; // componente para la segunda evaluación

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />

        <h1 className="App-title">Evaluación Parcial 1</h1>
        <h2 className="App-subtitle">
          Alumno: Sanchez Terrones Alejandra Yemanya
        </h2>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/alejandra-yemanya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN DE MY PROFILE
        </a>

        <br />

        <Link className="App-link" to="/descargas">
          DOCUMENTACIÓN PARCIAL 1
        </Link>

        <br/>

        <Link className="App-link" to="/parcial2">
          DOCUMENTACION PARCIAL 2
        </Link>
        
      </header>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/parcial2" element={<Parcial2 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;