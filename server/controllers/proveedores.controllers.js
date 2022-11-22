import { pool } from "../db.js";
export const getProveedores = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM proveedores ORDER BY id ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProveedor = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM proveedores WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "Proveedor no encontrado" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProveedor = async (req, res) => {
  try {
    const { nombre, telefono, correo } = req.body;
    const [result] = await pool.query(
      "INSERT INTO proveedores(nombre, telefono, correo) VALUES (?, ?, ?)",
      [nombre, telefono, correo]
    );
    res.json({
      id: result.insertId,
      nombre,
      telefono,
      correo,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProveedor = async (req, res) => {
    try {
      const result = await pool.query("UPDATE proveedores SET ? WHERE id = ?", [
        req.body,
        req.params.id,
      ]);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  export const deleteProveedor = async (req, res) => {
    try {
      const [result] = await pool.query("DELETE FROM proveedores WHERE id = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Proveedor no encontrado" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
