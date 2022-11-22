import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      {/*<h1>Proyecto Inventario</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
          <ul>
            <Link to="/productos/nuevo">Nuevo Producto</Link>
          </ul>
        </li>
        <li>
          <Link to="/proveedores">Proveedores</Link>
          <ul>
            <Link to="/proveedores/nuevo">Nuevo Proveedor</Link>
          </ul>
  </li>*/}
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
        <Link className="navbar-brand" to="/">
          <span className="bold">Proyecto Inventario</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Inicio <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Productos
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/productos">
                  Ver Productos
                </Link>
                <Link className="dropdown-item" to="/productos/nuevo">
                  Nuevo Producto
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Proveedores
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/proveedores">
                  Ver Proveedores
                </Link>
                <Link className="dropdown-item" to="/proveedores/nuevo">
                  Nuevo Proveedor
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
