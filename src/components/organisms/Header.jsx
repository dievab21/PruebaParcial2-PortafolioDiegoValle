
function Header({ pantallaActiva, cambiarPantalla }) {
  const opciones = [
    { id: "inicio", texto: "Inicio" },
    { id: "experiencia", texto: "Experiencia" },
    { id: "estudios", texto: "Estudios" },
    { id: "proyectos", texto: "Proyectos" },
    { id: "contacto", texto: "Contacto" },
  ];

  return (
    <header>
      <a
        href="#inicio"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          cambiarPantalla("inicio");
        }}
      >
        Diego Valle<span>.</span>
      </a>

      <nav>
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            type="button"
            className={
              pantallaActiva === opcion.id ? "nav-activo" : ""
            }
            onClick={() => cambiarPantalla(opcion.id)}
          >
            {opcion.texto}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Header;
