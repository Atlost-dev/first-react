function ProductCard({ imagen, nombre, categoria, precio, stock, onAgregar }) {
  const disponible = stock > 0;

  function handleAgregar() {
    if (disponible) {
      onAgregar(nombre);
    }
  }

  return (
    <article className="producto">
      <img className="producto_imagen" src={imagen} alt={nombre} />

      <p className="producto_categoria">{categoria}</p>

      <h3>{nombre}</h3>
      <p className="producto_precio">${precio.toLocaleString("es-MX")}</p>

      <p
        className={
          disponible
            ? "producto__stock producto__stock--disponible"
            : "producto__stock producto__stock--agotado"
        }>
        {disponible ? `${stock} unidades disponibles` : "Producto Agotado"}
      </p>

      <button type="button" onClick={handleAgregar} disabled={!disponible}>
        {disponible ? "Agregar al carrito" : "No disponible"}
      </button>
    </article>
  );
}

export default ProductCard;
