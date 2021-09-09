import data from "./data.json"
import React, { Component } from "react"
import Swal from "sweetalert2"
import Opciones from "./Opciones"
import Recordatorio from "./Recordatorio"

const opcionesAnteriores = []

class Layout extends Component{
     constructor(props){
        super(props)
        this.state = {
            contador : 0,
            anteriorOpcion : ""
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
          opcionesAnteriores.push(this.state.anteriorOpcion);
        }
      }

    seleccionOpcion = (elemento) => {
        const id = elemento.target.id

        if(this.state.contador >= 7){
            Swal.fire({
                title: 'Historia Terminada',
                text: 'Enorabuena, superaste la historia',
                icon: 'success',
                confirmButtonText: '¡Okey!',
                backgorund: '#FFFFFF'
              })
        } else if (id === "A" && this.state.anteriorOpcion !== "A") {
            this.setState({
              contador: this.state.contador + 1,
              anteriorOpcion: "A",
            });
          } else if (id === "A" && this.state.anteriorOpcion === "A") {
            this.setState({
              contador: this.state.contador + 2,
            });
          } else if (id === "B" && this.state.anteriorOpcion === "A") {
            this.setState({
              contador: this.state.contador + 3,
              anteriorOpcion: "B",
            });
          } else if (id === "B") {
            this.setState({
              contador: this.state.contador + 2,
              anteriorOpcion: "B",
            })
          }
    }

    render(){
        return(
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones  
                    seleccionOpcion = {this.seleccionOpcion}
                    opcionA = {data[this.state.contador].opciones.a}
                    opcionB = {data[this.state.contador].opciones.b}
                />
                <Recordatorio
                    anteriorOpcion = {this.state.anteriorOpcion}
                    opcionesAnteriores={opcionesAnteriores.map((elemento) => (
                        <li>{elemento}</li>)
                    )}
                />
            </div>
        )
    }
}

export default Layout