import React, { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario === "admin" && contraseña === "1234") {
      onLogin(usuario);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Residencial Los Robles</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
