export const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Nombre completo",
    errorMessage: "El nombre debe tener entre 3 y 16 caracteres",
    label: "Nombre",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "correo",
    errorMessage: "El correo no es valido",
    label: "Correo",
    required: true,
  },
  {
    id: 3,
    name: "phone",
    type: "tel",
    placeholder: "Telefono",
    label: "Telefono",
  },
];
