import logo from "./logo.svg";
import "./App.css";
import Contador from "./components/Contador";
import PropTypes from "prop-types";

function App() {
  const usuario = {
    nombre: "Sneider",
    apellido: "Castro",
    edad: "23",
    genero: "masculino",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contador />
        <Saludo destinatario="Sneider-09" usuario={usuario} />
      </header>
    </div>
  );
}

function Saludo(props) {
  return (
    <div>
      <h1>Hola, {props.destinatario}</h1>
      <h2>
        Hola, {props.usuario.nombre} {props.usuario.apellido}
      </h2>
      <p>
        Edad: <strong>{props.usuario.edad}</strong> años
      </p>
      <p>
        Genero: <strong>{props.usuario.genero}</strong>
      </p>
    </div>
  );
}

Saludo.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
