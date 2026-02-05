import profile from './fotocv.jpg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>
          Evaluacion Parcial 1
        </h1>
        <h1>
           Alumno(a): Sanchez Terrones Alejandra Yemanya
        </h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/alejandra-yemanya?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
        >
                  LINK DE MI PERFIL
        </a>
        <br></br>
         <a
          className="App-link"
          href="/cv.html"
          target="_blank"
          rel="noopener noreferrer"
        >
                  MI CV
        </a>
      </header>
    </div>
  );
}

export default App;