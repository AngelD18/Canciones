import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios'
import Cancion from './components/Cancion';
import Info from './components/Info';


function App() {
  //Definir el state
  const [stateBusquedaLetra, setBusquedaLetra] = useState({});
  const [stateLetra, setLetra] = useState('');
  const [stateInformacion, setInformacion] = useState({});

  useEffect(() => {
    if (Object.keys(stateBusquedaLetra).length === 0) return;//SABER SI EL OBJETO ESTA VACIO
    const consultarApiLetra = async () => {
      const { artista, cancion } = stateBusquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`
      const [stateLetra, informacion] = await Promise.all([
        axios(url),
        axios(url2)
      ]);
      setLetra(stateLetra.data.lyrics);
      setInformacion(informacion.data.artists[0]);


    }
    consultarApiLetra();
  }, [stateBusquedaLetra, stateInformacion])
  return (
    <Fragment>
      <Formulario
        setBusquedaLetra={setBusquedaLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              stateInformacion={stateInformacion}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              stateLetra={stateLetra}
            />


          </div>

        </div>

      </div>

    </Fragment>
  );
}

export default App;
