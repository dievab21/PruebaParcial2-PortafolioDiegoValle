import { useState, useEffect } from "react";
import PortafolioTemplate from "./components/templates/PortafolioTemplate";
import PortafolioPage from "./components/pages/PortafolioPage";
import "./App.css";

function App() {
  const [pantallaActiva, setPantallaActiva] = useState("inicio");

  useEffect(() => {
    document.title = "Portafolio de Diego Valle";
  }, []);

  const cambiarPantalla = (pantalla) => {
    setPantallaActiva(pantalla);
  };

  return (
    <PortafolioTemplate
      pantallaActiva={pantallaActiva}
      cambiarPantalla={cambiarPantalla}
    >
      <PortafolioPage pantallaActiva={pantallaActiva} cambiarPantalla={cambiarPantalla} />
    </PortafolioTemplate>
  );
}

export default App;