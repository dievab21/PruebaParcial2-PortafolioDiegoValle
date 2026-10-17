import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Experiencia from "./Experiencia";

describe("Componente Experiencia", () => {
  it("debe mostrar el título de la sección", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Mi experiencia" })
    ).toBeInTheDocument();
  });

  it("debe mostrar la experiencia laboral y sus fechas", () => {
    render(<Experiencia />);

    expect(
      screen.getByRole("heading", { name: "Experiencia laboral" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Little Caesars" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("2024 - 2025")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Operador multifuncional")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Walmart" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("2025 - 2026")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Cajero")
    ).toBeInTheDocument();
  });
});