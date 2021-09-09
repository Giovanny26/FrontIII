import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.anteriorOpcion}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.opcionesAnteriores}</ul>
      </div>
    )
  }
}

export default Recordatorio;
