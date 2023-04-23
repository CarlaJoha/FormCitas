import React from "react";
import { useState } from "react";


const Formulario = ({crearCita}) => {
  //Estado inicial de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    cita:"",
    sintomas: ""
  });

  const [ error, setError ] = useState(false)

  const actualizarState = (event) => {
    console.log(event.target.value);
    actualizarCita({
      ...cita,
      [event.target.name] : event.target.value
    })
  }

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (event) => {
    event.preventDefault();
    //validar Formulario
    if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "" ) {
      setError(true);
    return;
   }
   //eliminar mensaje de error
    setError(false);
   //asignar id
    cita.id = crypto.randomUUID(); 
   //crear cita
    crearCita(cita)
   //reiniciar el form
   actualizarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    cita:"",
    sintomas: ""
  })
  
  }

  return (
    <>
      <h2>Crear Cita</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input 
          type="date" 
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input 
          type="time" 
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          type="text" 
          name="sintomas"
          className="u-full-width"
          placeholder="Descripción de los síntomas"
          onChange={actualizarState}
          value={sintomas}
          >
        </textarea>
        <button
          type="submit"
          className="crearCita btn btn-primary u-full-width"
          onChange={actualizarState}
        >Agregar Cita
        </button>

      </form>
    </>
  );
};

export default Formulario;
