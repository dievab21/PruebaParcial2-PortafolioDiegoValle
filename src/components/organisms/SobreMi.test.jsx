import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SobreMi from "./SobreMi";

describe("Componente SobreMi", () => {
  it("debe mostrar el nombre Diego Valle", () => {
    render(<SobreMi />);

    const nombre = screen.getByRole("heading", {
      name: "Diego Valle",
    });

    expect(nombre).toBeInTheDocument();
  });

  it("debe mostrar la profesión de Analista Programador", () => {
    render(<SobreMi />);

    expect(
      screen.getByText("Estudiante de Analista Programador")
    ).toBeInTheDocument();
  });
});