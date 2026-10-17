import CampoTexto from "../atoms/CampoTexto";

function CampoFormulario({
  id,
  etiqueta,
  valor,
  onChange,
  placeholder,
  tipo = "text",
  multilinea = false,
  inputRef,
  maxLength,
  rows,
}) {
  return (
    <div className="campo-formulario">
      <label htmlFor={id}>{etiqueta}</label>

      {multilinea ? (
        <textarea
          id={id}
          ref={inputRef}
          value={valor}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={rows}
        />
      ) : (
        <CampoTexto
          id={id}
          type={tipo}
          value={valor}
          onChange={onChange}
          placeholder={placeholder}
          inputRef={inputRef}
          maxLength={maxLength}
        />
      )}
    </div>
  );
}

export default CampoFormulario;
