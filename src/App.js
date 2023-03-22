import "./App.css";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <div>
      <div className="container">
        <h1 className="mainTitle">Bienvenido a WhatWas</h1>
        <h3 className="mainInfo">
          La mejor herramienta para encontrar esa canción o película que no
          recuerdas
        </h3>
      </div>
      <div className="formContainer">
        <Formulario />
      </div>
      <footer className="footer">
        <p> Todos los derechos preservados</p>
      </footer>
    </div>
  );
};

export default App;
