import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductos } from "../context/ProductoContext";

function ProductosForm() {
  const { createProducto, getProducto, updateProducto } = useProductos();
  const params = useParams();
  const [producto, setProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    idProveedores: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducto = async () => {
      if (params.id) {
        const producto = await getProducto(params.id);
        setProducto({
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          idProveedores: producto.idProveedores,
        });
        console.log(producto);
      }
    };
    loadProducto();
  }, []);
  return (
    <div className="form-group bg-secondary m-3 border rounded shadow p-3 mb-5 bg-body rounded ">
      <h1 className="text-center  ">
        {params.id ? "Editar Producto" : "Nuevo Producto"}
      </h1>

      <Formik
        initialValues={producto}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProducto(params.id, values);
            navigate("/productos");
          } else {
            await createProducto(values);
          }
          actions.resetForm();
          setProducto({
            nombre: "",
            descripcion: "",
            precio: "",
            idProveedores: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="form-group m-3" onSubmit={handleSubmit}>
            <label className="form-label">Nombre</label>
            <input
              className="form-control mb-3"
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
              value={values.nombre}
            />

            <label className="form-label">Descripcion</label>
            <textarea
              className="form-control mb-3"
              name="descripcion"
              placeholder="Descripcion"
              rows="3"
              onChange={handleChange}
              value={values.descripcion}
            />

            <label className="form-label">Precio</label>
            <input
              className="form-control mb-3"
              type="number"
              name="precio"
              placeholder="Precio"
              onChange={handleChange}
              value={values.precio}
            />

            <label className="form-label">Id del Proveedor</label>
            <input
              className="form-control mb-3"
              type="number"
              name="idProveedores"
              placeholder="Id Proveedor"
              onChange={handleChange}
              value={values.idProveedores}
            />

            <button
              type="submit"
              className="btn btn-primary mb-2 w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando" : "Guardar Producto"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProductosForm;
