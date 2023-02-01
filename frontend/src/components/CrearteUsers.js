import React, { useState } from "react";

const CrearteUsers = () => {

  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "18",
    telefono: "0",
    email: "",
  }

  const [ usuario, setUsuario ]= useState(valorInicial)

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        {/*form */}
        <form>
          <div>
            <h2 className="text-center">Crear Usuario</h2>
            <div className="mb-3">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
                required
                value={usuario.nombre}
                name="nombre"
                
              />
            </div>
            <div className="mb-3">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Ingrese su apellido"
                required
                value={usuario.apellido}
                name="apellido"
              />
            </div>
            <div className="mb-3">
              <label>Edad:</label>
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Ingrese su edad"
                required
                value={usuario.edad}
                name="edad"
              />
            </div>
            <div className="mb-3">
              <label>Tefefono:</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Ingrese su tefefono"
                required
                value={usuario.telefono}
                name="tefefono"
              />
            </div>
            <div className="mb-3">
              <label>Email: </label>
              <input
                type="email"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Ingrese su correo"
                required
                value={usuario.email}
                name="email"
              />
            </div>

            <div
              className="btn-group form-control"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button " className="btn btn-outline-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearteUsers;
