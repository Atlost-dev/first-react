const ESTATUS = { Alive: "Vivo", Dead: "Muerto", unknown: "Desconocido" };
const GENERO = {
  Female: "Femenino",
  Male: "Masculino",
  Genderless: "Sin género",
  unknown: "Desconocido",
};

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
            <span
              className={`personaje_punto personaje_punto--${estatus.toLowerCase()}`}
            />
            {ESTATUS[estatus] ?? estatus}
          </dd>
        </div>
        <div className="personaje_dato">
          <dt>Género</dt>
          <dd>{GENERO[genero] ?? genero}</dd>
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
