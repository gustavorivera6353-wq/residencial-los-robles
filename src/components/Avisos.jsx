import React, { useState } from "react";

function Avisos() {
  const [avisos, setAvisos] = useState([
    { id: 1, titulo: "Reunión de vecinos", contenido: "Se realizará el próximo sábado a las 5 PM." },
    { id: 2, titulo: "Mantenimiento de áreas comunes", contenido: "El lunes se cerrará la alberca por limpieza." },
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState("");
  const [nuevoContenido, setNuevoContenido] = useState("");

  const publicarAviso = () => {
    if (nuevoTitulo.trim() === "" || nuevoContenido.trim() === "") {
      alert("Por favor ingresa título y contenido");
      return;
    }
    const nuevo = {
      id: avisos.length + 1,
      titulo: nuevoTitulo,
      contenido: nuevoContenido,
    };
    setAvisos([...avisos, nuevo]);
    setNuevoTitulo("");
    setNuevoContenido("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Módulo de Avisos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {avisos.map((a) => (
          <li key={a.id} style={{ marginBottom: "10px" }}>
            <strong>{a.titulo}</strong> — {a.contenido}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Título del aviso"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Contenido del aviso"
          value={nuevoContenido}
          onChange={(e) => setNuevoContenido(e.target.value)}
          rows="3"
          cols="40"
        />
        <br />
        <button onClick={publicarAviso}>Publicar Aviso</button>
      </div>
    </div>
  );
}

export default Avisos;
