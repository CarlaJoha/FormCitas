import Formulario from "./components/Formulario";
import { Fragment, useState, useEffect } from "react";
import Cita from "./components/Cita";
import logo from "./assets/logo4.png"

function App() {

  //Citas en LocalStorage
  let localStorageCitas = localStorage.getItem("citas");
  if(!localStorageCitas){
    localStorageCitas = []
  } else {
    localStorageCitas = JSON.parse(localStorage.getItem("citas")); 
  }
  // console.log(localStorageCitas);

  //arreglo de citas
  const [ citas, guardarCitas ] = useState(localStorageCitas);

  //Hacer operaciones cuando el state cambia
  useEffect(()=>{
    if(localStorageCitas){
      localStorage.setItem("citas", JSON.stringify(citas))
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }

  },[citas])

  // Leer la cita nueva, y agregar la nueva al estado de citas
  const crearCita = (cita) => {
    guardarCitas([
      ...citas,
      cita
    ]) 
  };
  //Elimiar cita por Id
  const eliminarCita = (id) =>{
    console.log(id);
    const nuevaCitas = citas.filter((cita) => cita.id !== id )
    guardarCitas(nuevaCitas);
  };
//agregar citas
const opcion = citas.length === 0 ? "No hay citas" : "Control de Citas";

  return (
    <Fragment>
      
      <div className="logo">
        <img src={logo} alt="" />
        <h1>Formulario de Citas</h1></div>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{opcion}</h2>
            {
            citas.map((cita) => (
              <Cita
                cita={cita}
                key={cita.id}
                eliminarCita={eliminarCita}
              />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
