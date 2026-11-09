function ProductSkeleton() {
  return (
    <article className="producto skeleton" aria-hidden="true">
      <div className="skeleton__imagen" />
      <div className="skeleton__linea skeleton__linea--corta" />
      <div className="skeleton__linea" />
      <div className="skeleton__linea" />
      <div className="skeleton__linea skeleton__linea--precio" />
      <div className="skeleton__boton" />
    </article>
  );
}

export default ProductSkeleton;
