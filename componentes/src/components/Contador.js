import React, { useState } from "react";

const Contador = () => {
  const [cuenta, setCuenta] = useState(1);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  const disminuir = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <input
        type="text"
        value={cuenta}
        size="2"
        style={{ textAlign: "center" }}
      ></input>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Contador;
