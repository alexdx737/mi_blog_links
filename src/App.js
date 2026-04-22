import profile from './fotocv.jpg';
import './App.css';
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Descargas from "./Descargas";
import Parcial2 from "./Parcial2";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

const CLIENT_ID = "884523512572-u4ho1dqbqgqrg1cqegh211uq9doh8kuc.apps.googleusercontent.com";

function Home() {
  const [usuario, setUsuario] = useState(null);

  const handleSuccess = (credentialResponse) => {
    const base64Url = credentialResponse.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const datos = JSON.parse(window.atob(base64));
    setUsuario(datos);
  };

  const handleError = () => {
    console.log("Error al iniciar sesión con Google");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1 className="App-title">Análisis y Diseño de Software</h1>
        <h2 className="App-subtitle">
          Alumno: Sanchez Terrones Alejandra Yemanya
        </h2>

        {/* LINKEDIN */}
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

        <br />

        <Link className="App-link" to="/parcial2">
          DOCUMENTACION PARCIAL 2
        </Link>

        <br />


        {!usuario ? (
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
          />
        ) : (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <img
              src={usuario.picture}
              alt="foto de perfil"
              style={{ borderRadius: '50%', width: '60px', marginBottom: '8px' }}
            />
            <p>Bienvenida, <strong>{usuario.name}</strong></p>
            <p style={{ fontSize: '0.85rem', color: '#aaa' }}>{usuario.email}</p>
            <button
              onClick={() => setUsuario(null)}
              style={{
                marginTop: '8px',
                padding: '6px 16px',
                backgroundColor: '#cc0000',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descargas" element={<Descargas />} />
          <Route path="/parcial2" element={<Parcial2 />} />
        </Routes>
      </HashRouter>
    </GoogleOAuthProvider>
  );
}

export default App;