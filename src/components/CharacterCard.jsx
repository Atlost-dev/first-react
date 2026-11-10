function CharacterCard({ nombre, estatus, genero, origen, locacion, imagen }) {
  return (
    <article className="producto personaje">
      <img className="personaje_imagen" src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <dl className="personaje_datos">
        <div>
          <dt>Estatus</dt>
          <dd>{estatus}</dd>
        </div>
        <div>
          <dt>Género</dt>
          <dd>{genero}</dd>
        </div>
        <div>
          <dt>Origen</dt>
          <dd>{origen}</dd>
        </div>
      </dl>

      <p className="personaje_locacion">
        <strong>Localización:</strong> {locacion}
      </p>
    </article>
  );
}

export default CharacterCard;
