import "./App.css";
import { Route, Routes } from "react-router-dom";
import InventarioPage from "./pages/InventarioPage";
import ProductosForm from "./pages/ProductosForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import ProductosPage from "./pages/ProductosPage";
import { ProductoContextProvider } from "./context/ProductoContext";
import ProveedoresForm from "./pages/ProveedoresForm";
import ProveedoresPage from "./pages/ProveedoresPage";
import { ProveedorContextProvider } from "./context/ProveedorContext";

function App() {
  return (
    <ProveedorContextProvider>
      <ProductoContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<InventarioPage />} />
          <Route path="/productos/nuevo" element={<ProductosForm />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/productos/edit/:id" element={<ProductosForm />} />
          <Route path="/proveedores/nuevo" element={<ProveedoresForm />} />
          <Route path="/proveedores" element={<ProveedoresPage />} />
          <Route path="/proveedores/edit/:id" element={<ProveedoresForm />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProductoContextProvider>
    </ProveedorContextProvider>
  );
}

export default App;
