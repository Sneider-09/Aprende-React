import "./App.css";
import React, { useState } from "react";

function App() {
  // Definir el estado para almacenar el resultado de la Suma
  const [resultado, setResultado] = useState(null);

  const elemento = <h1 className="centrar-titulo">Hola Mundo</h1>;
  /*const elemento2 = (
    <h2>
      {suma(25, 8)} 
    </h2>
  )*/

  const botonPulsado = () => {
    const result = suma(25, 8);
    setResultado(result);
  };

  return (
    <div>
      <button
        onClick={botonPulsado}
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        Púlsame
      </button>
      <div>{elemento}</div>
      <div>{resultado != null && <h2>El resultado es: {resultado}</h2>}</div>
    </div>
  );
}

function suma(a, b) {
  return a + b;
}
export default App;
