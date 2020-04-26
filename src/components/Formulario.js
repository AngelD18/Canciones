import React, { useState } from 'react';
const Formulario = ({setBusquedaLetra}) => {
    const [stateBusqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [stateError, setError] = useState(false);
    //Valores de objetos
    const { artista, cancion } = stateBusqueda;
    //Funcion a cada input
    const actualizarState = (e) => {
        setBusqueda({
            ...stateBusqueda,
            [e.target.name]: e.target.value
        })

    }
    const buscarInformacion = (e) => {
        e.preventDefault();
        if (artista.trim() === '' || cancion.trim() === '') {
            setError(true);
            return;

        }
        setError(false);
        //Pasar datos a componente principal
        setBusquedaLetra(stateBusqueda);
    }


    return (
        <div className="bg-info">
            {stateError ? <p className="alert alert-danger text-center p-2">
                Todos los Campos son Obligatorios
                    </p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letras Canciones
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            value={artista}
                                            onChange={actualizarState}
                                        />

                                    </div>

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Cancion"
                                            value={cancion}
                                            onChange={actualizarState}
                                        />

                                    </div>
                                </div>

                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Enviar

                            </button>
                        </fieldset>


                    </form>

                </div>

            </div>

        </div>
    );
}

export default Formulario;