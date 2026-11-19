import React, { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errores, setErrores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevos = [];

    if (usuario.trim() === "") {
      nuevos.push("El usuario es obligatorio.");
    }
    if (contraseña === "") {
      nuevos.push("La contraseña es obligatoria.");
    }
    if (
      nuevos.length === 0 &&
      !(usuario === "admin" && contraseña === "1234")
    ) {
      nuevos.push("Usuario o contraseña incorrectos.");
    }

    setErrores(nuevos);
    if (nuevos.length === 0) {
      onLogin(usuario);
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
      {errores.map((mensaje) => (
        <p key={mensaje} role="alert" style={{ color: "crimson" }}>
          {mensaje}
        </p>
      ))}
    </div>
  );
}

export default Login;
