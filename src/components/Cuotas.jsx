import React, { useState } from "react";

function Cuotas() {
  const [cuotas, setCuotas] = useState([
    { id: 1, concepto: "Mantenimiento mensual", estado: "Pendiente" },
    { id: 2, concepto: "Cuota extraordinaria", estado: "Vencida" },
    { id: 3, concepto: "Servicio de agua", estado: "Pagada" },
  ]);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Consulta de Cuotas y Adeudos</h2>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "60%",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Concepto
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          {cuotas.map((c) => (
            <tr key={c.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {c.concepto}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {c.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cuotas;
