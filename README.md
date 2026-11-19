# Residencial Los Robles

Plataforma web para administrar un residencial: llevar las cuotas y los pagos, publicar avisos, atender reportes de mantenimiento y realizar votaciones de los residentes.

Es el Proyecto II del Equipo Dinamita (UDG Plus) y se desarrolla con Scrum, en Sprints de 10 días hábiles.

## Equipo Scrum

| Rol | Integrante |
| --- | --- |
| Product Owner | Felix Ulises Franco Godinez |
| Scrum Master | Brenda Janeth Garcia Mendoza |
| Desarrollador | Gustavo Emmanuel Rivera Orozco |

## Tecnologías

- React 19
- Vite 8
- Oxlint (revisión de código)

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Otros comandos:

- `npm run build`: genera la versión de producción.
- `npm run lint`: revisa el código con Oxlint.

Para entrar al sistema se usa el usuario de prueba `admin` con contraseña `1234`. Es un usuario fijo y temporal mientras se construye la administración real de usuarios.

## Funciones del sistema

Terminadas (Sprint 1):

- Inicio de sesión (HU-01).
- Administración de usuarios y roles (HU-02).
- Consulta de cuotas y adeudos (HU-03).
- Publicación de avisos (HU-06) y consulta de avisos (HU-07).

En desarrollo (Sprint 2):

- Validación de contraseñas (HU-17).
- Registro de pagos y vínculo con las cuotas, primera parte de HU-04.

Pendientes: gestión de cuotas, quejas y reportes, votaciones, directorio y teléfonos de emergencia, entre otras. El detalle completo está en el Product Backlog.

## Estructura del proyecto

```text
src/
  App.jsx                    Pantalla principal
  components/
    Login.jsx                Inicio de sesión
    Usuarios.jsx             Usuarios y roles
    Cuotas.jsx               Cuotas y adeudos
    Avisos.jsx               Publicación de avisos
    ConsultaAvisos.jsx       Consulta de avisos
```

## Avance por Sprint

| Sprint | Fechas | Meta | Estado |
| --- | --- | --- | --- |
| 1 | Cerrado (código subido el 06/09/2026) | Inicio de sesión, usuarios y roles, cuotas y avisos | Completado (26 puntos) |
| 2 | 17/11/2026 al 30/11/2026 | Validar contraseñas, registrar pagos y documentar el proyecto | En curso |
| 3 | 01/12/2026 al 14/12/2026 | Historial de pagos y gestión de cuotas | Planeado |
| 4 | 15/12/2026 al 28/12/2026 | Asignar cuotas, filtro por fecha y registro de quejas | Planeado |
| 5 | 29/12/2026 al 12/01/2027 | Seguimiento de reportes | Planeado |

## Limitaciones actuales

Los datos (usuarios, cuotas, pagos y avisos) viven solo en el estado de React, así que se pierden al recargar la página. Conservarlos es la historia HU-23.

## Forma de trabajo

- Una rama y un Pull Request por tarea técnica, con el nombre `feature/T-xx-descripcion`.
- El Product Backlog y los Sprints se llevan en Trello y en el documento del equipo.

## Referencia

Schwaber, K. y Sutherland, J. (2020). La Guía de Scrum. https://scrumguides.org
