import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CrearteUsers = () => {
  const valorInicial = {
    nombre: "",
    apellido: "",
    edad: "18",
    telefono: "0",
    correo: "xxx@zxxxx",
  };
  //let {id}=useParams();
  //const [subId,setSubid]=useState(id);

  const [usuario, setUsuario] = useState(valorInicial);

  const catureData = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const saveData = async (e) => {
    e.preventDefault();
    console.log(usuario);

    //crear la logica para la peticion post
    const newUsuario = {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      telefono: usuario.telefono,
      correo: usuario.correo,
    };

    await axios.post("http://localhost:4000/api/usuarios", newUsuario);

    setUsuario({ ...valorInicial });
  };

  //funcion para actualizar el usuario
  /*const UpdateUser=async(e)=>{
  e.preventDefault();

  const newUsuarioUpdate = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    edad: usuario.edad,
    telefono: usuario.telefono,
    email: usuario.email,
  };
await axios.put('http://localhost:4000/api/usuarios/'+subId,newUsuarioUpdate);
setUsuario({ ...valorInicial });
setSubid('')

};*/
  /*const getOne=async(valorId)=>{
  const res=await axios.get('http://localhost:4000/api/usuarios/'+valorId)
  setUsuario({
    nombre:res.data.nombre,
    apellido:res.data.apellido,
    edad:res.data.edad,
    telefono:res.data.telefono,
    email:res.data.email
  })

}
useEffect(()=>{
  if(subId !==''){
    getOne(subId)
  }
},[subId])*/

  //logica para hacer una peticion a la  API

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        {/*form */}
        <form onSubmit={saveData}>
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
                onChange={catureData}
              />
            </div>
            <div className="mb-3">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su apellido"
                required
                value={usuario.apellido}
                name="apellido"
                onChange={catureData}
              />
            </div>
            <div className="mb-3">
              <label>Edad:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese su edad"
                required
                value={usuario.edad}
                name="edad"
                onChange={catureData}
              />
            </div>
            
            <div className="mb-3">
              <label>Tefefono:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su tefefono"
                required
                value={usuario.telefono}
                name="telefono"
                onChange={catureData}
              />
            </div>
            <div className="mb-3">
              <label>Email: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su correo"
                required
                value={usuario.correo}
                name="email"
                onChange={catureData}
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
