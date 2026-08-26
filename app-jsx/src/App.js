import "./App.css";
import React, { useState, useRef } from "react";
import video from "./assets/video.mp4";

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

  const videoRef = useRef(null);
  const videoPlay = () => {
    videoRef.current.play();
  };
  const videoPause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      {/* useState*/}
      <button
        onClick={botonPulsado}
        style={{ marginTop: "10px", marginLeft: "10px" }}
      >
        Púlsame
      </button>
      <div>{elemento}</div>
      <div>{resultado != null && <h2>El resultado es: {resultado}</h2>}</div>

      {/*useRef*/}
      <video ref={videoRef} width="400">
        <source src={video} type="video/mp4"></source>
      </video>
      <div>
        <button onClick={videoPlay}>Play</button>
        <button onClick={videoPause}>Pause</button>
      </div>
    </div>
  );
}

function suma(a, b) {
  return a + b;
}
export default App;
