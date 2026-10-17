import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

function PortafolioTemplate({
  children,
  pantallaActiva,
  cambiarPantalla,
}) {
  return (
    <>
      <Header
        pantallaActiva={pantallaActiva}
        cambiarPantalla={cambiarPantalla}
      />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default PortafolioTemplate;
