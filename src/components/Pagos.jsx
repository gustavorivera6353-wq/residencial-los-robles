import React from "react";

// T-01: diseño de la pantalla de registro y consulta de pagos.
// Los campos todavía no funcionan; el formulario se activa en T-02.
function Pagos() {
  const celda = { border: "1px solid black", padding: "8px" };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Registro y consulta de pagos</h2>

      <h3>Registrar pago</h3>
      <div>
        <input type="text" placeholder="Residente" disabled />
        <input type="text" placeholder="Cuota" disabled />
        <input type="number" placeholder="Monto" disabled />
        <input type="date" disabled />
        <button disabled>Registrar pago</button>
      </div>

      <h3>Historial de pagos</h3>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "60%",
        }}
      >
        <thead>
          <tr>
            <th style={celda}>Residente</th>
            <th style={celda}>Cuota</th>
            <th style={celda}>Monto</th>
            <th style={celda}>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={celda} colSpan={4}>
              Aún no hay pagos registrados.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Pagos;
