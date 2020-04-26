import React, { Fragment } from 'react';
const Cancion = ({ stateLetra }) => {
    if(stateLetra.length===0)return null;
    return (
        <Fragment>
            <h2>Letra Cancion </h2>
            <p className="letra"> {stateLetra}</p>

        </Fragment>
    );
}

export default Cancion;