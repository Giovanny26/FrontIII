import React, { Component } from "react";  

class Opciones extends Component{
    render(){
        return (
            <div className="opciones">
              <div className="opcion">
                <button id="A" className="botones" onClick={this.props.seleccionOpcion}>
                  A
                </button>
                <h2>{this.props.opcionA}</h2>
              </div>
              <div className="opcion">
                <button id="B" className="botones" onClick={this.props.seleccionOpcion}>
                  B
                </button>
                <h2>{this.props.opcionB}</h2>
              </div>
            </div>
          )
    }
}


export default Opciones;