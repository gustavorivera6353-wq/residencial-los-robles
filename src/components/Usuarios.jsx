import React, { useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Brenda", rol: "Diseñadora" },
    { id: 2, nombre: "Christian", rol: "Desarrollador" },
    { id: 3, nombre: "Ulises", rol: "Desarrollador" },
    { id: 4, nombre: "Gustavo", rol: "Tester" },
  ]);

  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const [nuevoRol, setNuevoRol] = useState("");

  const agregarUsuario = () => {
    if (nuevoUsuario.trim() === "" || nuevoRol.trim() === "") {
      alert("Por favor ingresa nombre y rol");
      return;
    }
    const nuevo = {
      id: usuarios.length + 1,
      nombre: nuevoUsuario,
      rol: nuevoRol,
    };
    setUsuarios([...usuarios, nuevo]);
    setNuevoUsuario("");
    setNuevoRol("");
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
        <button onClick={agregarUsuario}>Agregar Usuario</button>
      </div>
    </div>
  );
}

export default Usuarios;
