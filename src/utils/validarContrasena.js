// Reglas de la contraseña nueva (HU-17):
// mínimo 8 caracteres, una mayúscula y un número.
// Devuelve una lista con un mensaje por cada regla que no se cumple.
export function validarContrasena(contrasena) {
  const errores = [];

  if (contrasena.length < 8) {
    errores.push("La contraseña debe tener al menos 8 caracteres.");
  }
  if (!/[A-Z]/.test(contrasena)) {
    errores.push("La contraseña debe incluir al menos una letra mayúscula.");
  }
  if (!/[0-9]/.test(contrasena)) {
    errores.push("La contraseña debe incluir al menos un número.");
  }

  return errores;
}
