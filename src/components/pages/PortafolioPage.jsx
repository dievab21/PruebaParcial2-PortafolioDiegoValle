import SobreMi from "../organisms/SobreMi";
import Estudios from "../organisms/Estudios";
import Experiencia from "../organisms/Experiencia";
import Proyectos from "../organisms/Proyectos";
import Contacto from "../organisms/Contacto";

function PortafolioPage({ pantallaActiva, cambiarPantalla }) {
  switch (pantallaActiva) {
    case "inicio":
      return <SobreMi cambiarPantalla={cambiarPantalla} />;

    case "experiencia":
      return <Experiencia />;

    case "estudios":
      return <Estudios />;

    case "proyectos":
      return <Proyectos />;

    case "contacto":
      return <Contacto />;

    default:
      return <SobreMi cambiarPantalla={cambiarPantalla} />;
  }
}

export default PortafolioPage;
