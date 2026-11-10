function ProductSkeleton() {
  return (
    <article className="producto skeleton" aria-hidden="true">
      <div className="skeleton-imagen" />
      <div className="skeleton-linea skeleton-linea--corta" />
      <div className="skeleton-linea" />
      <div className="skeleton-linea" />
      <div className="skeleton-linea skeleton-linea--precio" />
      <div className="skeleton-linea skeleton-linea--stock" />
      <div className="skeleton-boton" />
    </article>
  );
}

export default ProductSkeleton;
