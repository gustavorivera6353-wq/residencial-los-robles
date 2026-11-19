import React, { useState } from "react";
import { validarContrasena } from "../utils/validarContrasena";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Brenda", rol: "Scrum Master" },
    { id: 2, nombre: "Ulises", rol: "Product Owner" },
    { id: 3, nombre: "Gustavo", rol: "Desarrollador" },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const [nuevoRol, setNuevoRol] = useState("");
  const [nuevaContrasena, setNuevaContrasena] = useState("");
  const [errores, setErrores] = useState([]);

  const agregarUsuario = () => {
    const nuevos = [];

    if (nuevoUsuario.trim() === "") {
      nuevos.push("El nombre es obligatorio.");
    }
    if (nuevoRol.trim() === "") {
      nuevos.push("El rol es obligatorio.");
    }
    nuevos.push(...validarContrasena(nuevaContrasena));

    setErrores(nuevos);
    if (nuevos.length > 0) {
      return;
    }

    // La contraseña solo se valida por ahora; guardarla de forma segura
    // llegará con la persistencia de datos (HU-23).
    const nuevo = {
      id: Date.now(),
      nombre: nuevoUsuario.trim(),
      rol: nuevoRol.trim(),
    };
    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario("");
    setNuevoRol("");
    setNuevaContrasena("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Gestión de Usuarios</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {usuarios.map((u) => (
          <li key={u.id}>
            {u.nombre} — <strong>{u.rol}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoUsuario}
          onChange={(e) => setNuevoUsuario(e.target.value)}
        />
        <input
          type="text"
          placeholder="Rol"
          value={nuevoRol}
          onChange={(e) => setNuevoRol(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={nuevaContrasena}
          onChange={(e) => setNuevaContrasena(e.target.value)}
        />
        <button onClick={agregarUsuario}>Agregar Usuario</button>
      </div>
      {errores.map((mensaje) => (
        <p key={mensaje} role="alert" style={{ color: "crimson" }}>
          {mensaje}
        </p>
      ))}
    </div>
  );
}

export default Usuarios;
