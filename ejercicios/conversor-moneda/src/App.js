import "./App.css";
import { useRef, useState, useEffect } from "react";

function App() {
  const [valorCambio, setValorCambio] = useState(null);

  const copRef = useRef();
  const resultadoRef = useRef();

  useEffect(() => {
    const llamaApiCambio = async () => {
      try {
        const respuesta = await fetch(process.env.REACT_APP_API_URL);

        const datos = await respuesta.json();
        console.log(datos);
        setValorCambio(datos.conversion_rates.USD);
      } catch (error) {
        console.error("Error al acceder a la API:", error);
      }
    };
    llamaApiCambio();
  }, []);

  const calcular = () => {
    const copValor = parseFloat(copRef.current.value);
    const dolares = copValor * valorCambio;
    resultadoRef.current.innerHTML = dolares.toFixed(2) + " $";
  };

  return (
    <div className="centrar-elementos">
      <h1>Conversor COP-USD</h1>
      <input
        className="centrar-elementos"
        type="text"
        ref={copRef}
      ></input>{" "}
      <br />
      <button className="centrar-elementos" onClick={calcular}>
        Convertir
      </button>
      <br />
      <div className="centrar-elementos resultado" ref={resultadoRef}></div>
    </div>
  );
}

export default App;
