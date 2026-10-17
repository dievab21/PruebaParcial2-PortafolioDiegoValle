import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Componente Header", () => {
  it("debe mostrar los botones de navegación", () => {
    render(
      <Header
        pantallaActiva="inicio"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: "Inicio" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Experiencia" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Estudios" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Proyectos" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Contacto" })
    ).toBeInTheDocument();
  });

  it("debe cambiar a la sección seleccionada", () => {
    const cambiarPantalla = vi.fn();

    render(
      <Header
        pantallaActiva="inicio"
        cambiarPantalla={cambiarPantalla}
      />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Estudios" })
    );

    expect(cambiarPantalla).toHaveBeenCalledWith("estudios");
  });

  it("debe marcar la sección activa", () => {
    render(
      <Header
        pantallaActiva="proyectos"
        cambiarPantalla={vi.fn()}
      />
    );

    expect(
      screen.getByRole("button", { name: "Proyectos" })
    ).toHaveClass("nav-activo");

    expect(
      screen.getByRole("button", { name: "Inicio" })
    ).not.toHaveClass("nav-activo");
  });

  it("debe volver a Inicio al pulsar el logo", () => {
    const cambiarPantalla = vi.fn();

    render(
      <Header
        pantallaActiva="contacto"
        cambiarPantalla={cambiarPantalla}
      />
    );

    fireEvent.click(
      screen.getByRole("link", { name: /diego valle/i })
    );

    expect(cambiarPantalla).toHaveBeenCalledWith("inicio");
  });
});