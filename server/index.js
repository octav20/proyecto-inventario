import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import cors from "cors";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);
app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(productosRoutes);
app.use(proveedoresRoutes);
app.use(express.static(join(__dirname, "../frontend/dist")));

app.listen(PORT);
console.log(`Server is listening on port ${PORT}`);