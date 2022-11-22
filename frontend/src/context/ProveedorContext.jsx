import { useContext } from "react";
import { createContext, useState } from "react";
import {
  createProveedorRequest,
  deleteProveedorRequest,
  getProveedorRequest,
  getProveedoresRequest,
  updateProveedorRequest,
} from "../api/Proveedores.api";

export const ProveedorContext = createContext();
export const useProveedores = () => {
  const context = useContext(ProveedorContext);
  if (!context) {
    throw new Error(
      "useProveedores debe ser usado dentro de un ProveedorContextProvider"
    );
  }
  return context;
};
export const ProveedorContextProvider = ({ children }) => {
  const [proveedores, setProveedores] = useState([]);
  async function loadProveedores() {
    const response = await getProveedoresRequest();
    setProveedores(response.data);
  }
  const deleteProveedor = async (id) => {
    try {
      const response = await deleteProveedorRequest(id);
      setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createProveedor = async (proveedor) => {
    try {
      const response = await createProveedorRequest(proveedor);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getProveedor = async (id) => {
    try {
      const response = await getProveedorRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProveedor = async (id, newFields) => {
    try {
      const response = await updateProveedorRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProveedorContext.Provider
      value={{
        proveedores,
        loadProveedores,
        deleteProveedor,
        createProveedor,
        getProveedor,
        updateProveedor,
      }}
    >
      {children}
    </ProveedorContext.Provider>
  );
};
