function About() {
  return (
    <section className="sobre-nosotros" id="nosotros">
      <h2> Sobre Tech-Store</h2>
      <div className="contenido-nosotros">
        <p>
          {" "}
          Nos dedicamos a la venta de componentes y equipos de alta calidad,
          manteniendo nuestro compromiso con un cliente satisfecho
        </p>
        <p>
          {" "}
          Nuestra misión es mantener una coherencia en lo que hacemos con lo que
          decimos.
        </p>
      </div>
      <div className="beneficios">
        <h3> Beneficios con Nosotros:</h3>
        <ul className="lista-beneficios">
          <li> Envío Gratis </li>
          <li> Facilidades de compra </li>
          <li> Meses sin Intereses</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
