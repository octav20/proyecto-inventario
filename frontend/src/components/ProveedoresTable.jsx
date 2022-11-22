import React from "react";

function ProveedoresTable({ proveedor }) {
  return (
    <tbody>
      <tr className="table-secondary">
        <th scope="row">{proveedor.id}</th>
        <td>{proveedor.nombre}</td>
        <td>{proveedor.telefono}</td>
        <td>{proveedor.correo}</td>
      </tr>
    </tbody>
  );
}

export default ProveedoresTable;
