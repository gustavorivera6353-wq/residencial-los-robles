import React, { useState } from "react";

function ConsultaAvisos() {
  const [avisos] = useState([
    { id: 1, titulo: "Reunión de vecinos", contenido: "Se realizará el próximo sábado a las 5 PM." },
    { id: 2, titulo: "Mantenimiento de áreas comunes", contenido: "El lunes se cerrará la alberca por limpieza." },
    { id: 3, titulo: "Aviso de seguridad", contenido: "Favor de cerrar bien las puertas de acceso." },
  ]);

  const [avisoSeleccionado, setAvisoSeleccionado] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Consulta de Avisos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {avisos.map((a) => (
          <li key={a.id} style={{ marginBottom: "10px" }}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => setAvisoSeleccionado(a)}
            >
              {a.titulo}
            </button>
          </li>
        ))}
      </ul>

      {avisoSeleccionado && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h3>{avisoSeleccionado.titulo}</h3>
          <p>{avisoSeleccionado.contenido}</p>
          <button onClick={() => setAvisoSeleccionado(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default ConsultaAvisos;
