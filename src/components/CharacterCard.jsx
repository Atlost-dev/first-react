function CharacterCard({ nombre, estatus, genero, origen, locacion, imagen }) {
  return (
    <article className="personaje">
      <img className="personaje_imagen" src={imagen} alt={nombre} />

      <p className="personaje_origen">{origen}</p>

      <h3 className="personaje_nombre">{nombre}</h3>

      <dl className="personaje_datos">
        <div className="personaje_dato">
          <dt>Estatus</dt>
          <dd>
            {/* La API usa "Alive", "Dead" o "unknown" */}
            <span
              className={`personaje_punto personaje_punto--${estatus.toLowerCase()}`}
            />
            {estatus}
          </dd>
        </div>
        <div className="personaje_dato">
          <dt>Género</dt>
          <dd>{genero}</dd>
        </div>
      </dl>

      <div className="personaje_locacion">
        <span>Localización</span>
        <p>{locacion}</p>
      </div>
    </article>
  );
}

export default CharacterCard;
