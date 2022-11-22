import { useContext } from "react";
import { createContext, useState } from "react";
import {
  createProductoRequest,
  deleteProductoRequest,
  getProductoRequest,
  getProductosRequest,
  updateProductoRequest,
} from "../api/productos.api";

export const ProductoContext = createContext();
export const useProductos = () => {
  const context = useContext(ProductoContext);
  if (!context) {
    throw new Error(
      "useProducto debe ser usado dentro de un ProductoContextProvider"
    );
  }
  return context;
};
export const ProductoContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  async function loadProductos() {
    const response = await getProductosRequest();
    setProductos(response.data);
  }
  const deleteProducto = async (id) => {
    try {
      const response = await deleteProductoRequest(id);
      setProductos(productos.filter((producto) => producto.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createProducto = async (producto) => {
    try {
      const response = await createProductoRequest(producto);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getProducto = async (id) => {
    try {
      const response = await getProductoRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProducto = async (id, newFields) => {
    try {
      const response = await updateProductoRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        loadProductos,
        deleteProducto,
        createProducto,
        getProducto,
        updateProducto,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
