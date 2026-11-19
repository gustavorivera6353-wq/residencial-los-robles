import React, { useState } from "react";
import Login from "./components/Login";
import Usuarios from "./components/Usuarios";
import Cuotas from "./components/Cuotas";
import Pagos from "./components/Pagos";
import Avisos from "./components/Avisos";
import ConsultaAvisos from "./components/ConsultaAvisos";

function App() {
  const [usuario, setUsuario] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!usuario ? (
        <Login onLogin={setUsuario} />
      ) : (
        <>
          <h2>Welcome, {usuario}</h2>
          <Usuarios />
          <Cuotas />
          <Pagos />
          <Avisos />
          <ConsultaAvisos />
        </>
      )}
    </div>
  );
}

export default App;
