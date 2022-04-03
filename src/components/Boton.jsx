import React from "react";

const Boton = (p) => {
  return (
    <div className="opcion">
      <button className="botones" onClick={() => p.evento(p.letra)}>
        {p.letra.toUpperCase()}
      </button>
      <h2>{p.texto}</h2>
    </div>
  );
};

export default Boton;