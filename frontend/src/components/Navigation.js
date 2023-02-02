import React from "react";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <div>
      navigation
      {/* Navegacion*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Usuario
          </Link>
          <Link
            className="navbar-brand"
            
            to={"/crearusuario"}
          >
            Crear usuario
          </Link>
          <Link className="navbar-brand"  to={"/listaUsuarios"}>
            Lista Usuarios
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default navigation;
