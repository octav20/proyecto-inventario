import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProveedores } from "../context/ProveedorContext";

function ProveedoresForm() {
  const { createProveedor, getProveedor, updateProveedor } = useProveedores();
  const params = useParams();
  const [proveedor, setProveedor] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loadProveedor = async () => {
      if (params.id) {
        const proveedor = await getProveedor(params.id);
        setProveedor({
          nombre: proveedor.nombre,
          telefono: proveedor.telefono,
          correo: proveedor.correo,
        });
        console.log(proveedor);
      }
    };
    loadProveedor();
  }, []);
  return (
    <div className="form-group bg-secondary m-3 border rounded shadow p-3 mb-5 bg-body rounded">
      <h1 className="text-center  ">
        {params.id ? "Editar Proveedor" : "Nuevo Proveedor"}
      </h1>
      <Formik
        initialValues={proveedor}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateProveedor(params.id, values);
            navigate("/proveedores");
          } else {
            await createProveedor(values);
          }
          actions.resetForm();
          setProveedor({
            nombre: "",
            telefono: "",
            correo: "",
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

            <label className="form-label">Telefono</label>
            <input
              className="form-control mb-3"
              type="tel"
              name="telefono"
              placeholder="Telefono"
              onChange={handleChange}
              value={values.telefono}
            />

            <label className="form-label">Correo</label>
            <input
              className="form-control mb-3"
              type="email"
              name="correo"
              placeholder="correo"
              onChange={handleChange}
              value={values.correo}
            />

            <button
              type="submit"
              className="btn btn-primary mb-2 w-100"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Guardando" : "Guardar Proveedor"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ProveedoresForm;
