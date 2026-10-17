function Proyectos() {
  const proyectos = [
    {
      titulo: "Tienda Guau Miau",
      categoria: "Programación",
      descripcion:
        "Caso 1: Desarrollo de tienda para mascotas. Proyecto enfocado en la creación de una interfaz web interactiva.",
      enlace:
        "https://github.com/dievab21/Diego-Valle-CASO-1TIENDA-GUAU-MIAU",
      plataforma: "Ver repositorio en GitHub",
    },
    {
      titulo: "TecnoFit",
      categoria: "Programación",
      descripcion:
        "Caso 4: Proyecto de plataforma web enfocada en tecnología y fitness.",
      enlace:
        "https://github.com/dievab21/CASO-4-TECNOFIT-DIEGO-VALLE_002D",
      plataforma: "Ver repositorio en GitHub",
    },
    {
      titulo: "DiegoApp",
      categoria: "Programación",
      descripcion:
        "Desafío de desarrollo web. Implementación de lógica y diseño responsivo.",
      enlace:
        "https://github.com/dievab21/DESAFIO-3-DIEGO-VALLE",
      plataforma: "Ver repositorio en GitHub",
    },
  ];

  return (
    <section id="proyectos" className="proyectos">
      <h2>Mis proyectos</h2>

      <p className="proyectos-intro">
        Desarrollo de mis proyectos web de programacion a lo largo del tiempo.
      </p>

      <h3 className="proyectos-subtitulo">Programación</h3>

      <div className="proyectos-grid">
        {proyectos.map((proyecto) => (
          <article className="proyecto" key={proyecto.titulo}>
            <span className="proyecto-categoria">
              {proyecto.categoria}
            </span>

            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              {proyecto.plataforma}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;