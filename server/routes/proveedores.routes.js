import { Router } from "express";

import {
    getProveedores,
    getProveedor,
    createProveedor,
    updateProveedor,
    deleteProveedor,
    
  } from "../controllers/proveedores.controllers.js";
  
  const router = Router();
  
  
  router.get("/proveedores", getProveedores);
  router.get("/proveedores/:id", getProveedor);
  router.post("/proveedores", createProveedor);
  router.put("/proveedores/:id", updateProveedor);
  router.delete("/proveedores/:id", deleteProveedor);
export default router;