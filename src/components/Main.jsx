import data from "./data.json";
import React, { Component } from "react";
import Historia from "./Historia";
import Boton from "./Boton";
import Recordatorio from "./Recordatorio";

class Main extends Component {
  state = {
    iterador: 1,
    eleccionActual: "1",
    historiaActual: {
      historia: "",
      opciones: {
        a: "",
        b: "",
      },
    },
    eleccionUltima: "",
    historialElecciones: [],
  };

  constructor(p) {
    super(p);
    this.eventoBoton = this.eventoBoton.bind(this);
  }

  //////////////////////////////////////////////////////////////////////////////
  elegirHistoria() {
    let opcionElegida = data.filter((dato) => {
      if (dato.id === this.state.eleccionActual) {
        return dato;
      }
    });

    this.setState({
      historiaActual: opcionElegida[0],
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  eventoBoton(letra) {
    if (
      this.state.historiaActual.opciones.a === "FIN" ||
      this.state.historiaActual.opciones.a === "FIN."
    ) {
      alert("Felicitaciones creaste tu propia historia!");
    } else {
      let iteradorAux = this.state.iterador + 1;

      let elecionActualAux = `${iteradorAux}${letra}`;

      let historialEleccionesAux = this.state.historialElecciones;

      if (this.state.eleccionUltima !== "") {
        historialEleccionesAux.push(this.state.eleccionUltima);
      }

      this.setState(
        {
          eleccionUltima: letra,
          historialElecciones: historialEleccionesAux,
          iterador: iteradorAux,
          eleccionActual: elecionActualAux,
        },
        this.elegirHistoria
      );
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    this.elegirHistoria();
  }

  //////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="layout">
        <Historia historia={this.state.historiaActual.historia} />
        <div className="opciones">
          <Boton
            letra="a"
            texto={this.state.historiaActual.opciones.a}
            evento={this.eventoBoton}
          />
          <Boton
            letra="b"
            texto={this.state.historiaActual.opciones.b}
            evento={this.eventoBoton}
          />
        </div>
        <Recordatorio
          eleccionUltima={this.state.eleccionUltima}
          historial={this.state.historialElecciones}
        />
      </div>
    );
  }
}

export default Main;
