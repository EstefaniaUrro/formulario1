import React, { Component } from 'react';

export default class Formulario extends Component {
    static defaultProps = {
        nombre: "un nombre",
        correo: "",
        isActive: true,
        fruta: "mango"
    }
    constructor(props) {
        super(props);
        this.state = { ...this.props } //para sustituir los valores que me envian
    }
    __montarNombre = (nombre) => {
        const entrada = nombre.split(' ');
        let salida = "";
        entrada.forEach(dato => {
            salida += dato + ",";
        })
        return salida;
    }
    __gestionEnvio = (e) => {
        e.preventDefault();
        console.log(this.__montarNombre(this.state.nombre));
        console.log(this.state);
    }
    __gestionInputCambia = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const nombreCampo = target.id;
        this.setState({
            [nombreCampo]: value
        })
    }
    render() {

        return (
            <>
                <div className="container">
                    <h1>Formulario</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Ingrese un nombre"
                                value={this.state.nombre}
                                onChange={this.__gestionInputCambia}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="correo">Correo Electronico</label>
                            <input
                                className="form-control"
                                type="email"
                                id="correo"
                                name="correo"
                                placeholder="Ingrese un correo electronico"
                                value={this.state.correo}
                                onChange={this.__gestionInputCambia}
                            />
                        </div>
                        <div className="form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="isActive"
                                value={this.state.isActive}
                                onChange={this.__gestionInputCambia} />
                            <label className="form-check-label" htmlFor="isActive">Activado</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="fruta"> Fruta favorito</label >
                            <select
                                className="form-control"
                                id="fruta"
                                value={this.state.fruta}
                                onChange={this.__gestionInputCambia}>
                                <option>Seleccionar</option>
                                <option value="fresa">Fresa</option>
                                <option value="mora">Mora</option>
                                <option value="mango">Mango</option>
                                <option value="maracuya">Maracuya</option>
                                <option value="limon">Limón</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.__gestionEnvio}>Enviar</button>
                    </form >
                </div >
            </>
        )
    }
}