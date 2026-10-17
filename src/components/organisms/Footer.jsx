function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {anioActual} Diego Valle. Proyecto profesional desarrollado para Duoc UC.
      </p>

      <p>
        Estudiante de Analista Programador | Duoc UC
      </p>

      <div className="redes">
        <a
          href="https://github.com/dievab21"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;