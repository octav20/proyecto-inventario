import React from "react";

function ProductosTable({ producto }) {
  return (
    <tbody>
      <tr className="table-secondary">
        <th scope="row">{producto.id}</th>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>{producto.precio}</td>
        <td>{producto.idProveedores}</td>
      </tr>
    </tbody>
  );
}

export default ProductosTable;
