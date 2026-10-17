function CampoTexto({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  inputRef,
  maxLength,
}) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      maxLength={maxLength}
    />
  );
}

export default CampoTexto;
