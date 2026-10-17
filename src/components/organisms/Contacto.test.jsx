import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Contacto from "./Contacto";

describe("Componente Contacto", () => {
  it("debe mostrar el título y los campos del formulario", () => {
    render(<Contacto />);

    expect(
      screen.getByRole("heading", { name: "Contacto" })
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Correo electrónico")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
  });

  it("debe mostrar un error si se envía sin ingresar el nombre", () => {
    render(<Contacto />);

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Error. Ingresa tu nombre por favor!!"
    );
  });

  it("debe mostrar un error si faltan campos obligatorios", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Diego Valle" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Error. Debes completar todos los campos del formulario!!"
    );
  });

  it("debe mostrar un error si faltan el correo y el mensaje", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Diego Valle" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Error. Debes completar todos los campos del formulario!!"
    );
  });

  it("debe rechazar un correo electrónico inválido", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Diego Valle" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "correo-invalido" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "Hola, este es un mensaje de prueba." },
    });

    const formulario = screen
      .getByLabelText("Nombre")
      .closest("form");

    fireEvent.submit(formulario);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Error. Ingresa un correo electrónico válido!!"
    );
  });
  
  it("debe mostrar un mensaje de éxito cuando los datos son válidos", () => {
    render(<Contacto />);

    fireEvent.change(screen.getByLabelText("Nombre"), {
      target: { value: "Diego Valle" },
    });

    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
      target: { value: "diegoandres@correo.com" },
    });

    fireEvent.change(screen.getByLabelText("Mensaje"), {
      target: { value: "Hola, este es un mensaje de prueba." },
    });

    fireEvent.click(
      screen.getByRole("button", { name: "Enviar mensaje" })
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "¡Formulario validado correctamente!"
    );

    expect(screen.getByLabelText("Nombre")).toHaveValue("");
    expect(screen.getByLabelText("Correo electrónico")).toHaveValue("");
    expect(screen.getByLabelText("Mensaje")).toHaveValue("");
  });

});
