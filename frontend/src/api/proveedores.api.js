import axios from "axios";

export const getProveedoresRequest = async () =>
  await axios.get("http://localhost:4000/Proveedores");
export const createProveedorRequest = async (Proveedor) =>
  await axios.post("http://localhost:4000/Proveedores", Proveedor);
export const deleteProveedorRequest = async (id) =>
  await axios.delete(`http://localhost:4000/Proveedores/${id}`);
export const getProveedorRequest = async (id) =>
  await axios.get(`http://localhost:4000/Proveedores/${id}`);
export const updateProveedorRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/Proveedores/${id}`, newFields);
