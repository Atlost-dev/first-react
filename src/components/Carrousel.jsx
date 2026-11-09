import { useState, useEffect } from "react";
import arbusto from "../assets/carrusel/un_arbusto.jpg";
import silla from "../assets/carrusel/una_silla.jpg";
import flor from "../assets/carrusel/unaflor.jpg";

const slides = [
  {
    imagen: arbusto,
    titulo: "Laptops para estudiar",
    texto: "Potencia para tus clases y proyectos.",
  },
  {
    imagen: silla,
    titulo: "Accesorios",
    texto: "Audífonos, teclados y mouse al mejor precio.",
  },
  {
    imagen: flor,
    titulo: "Dispositivos móviles",
    texto: "Lleva la tecnología contigo a todos lados.",
  },
];

function Carrousel() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndice((i) => (i + 1) % slides.length),
      4000,
    );
    return () => clearInterval(id);
  }, [indice]);

  const mover = (paso) =>
    setIndice((i) => (i + paso + slides.length) % slides.length);

  return (
    <section className="carrusel" aria-label="Novedades">
      {slides.map((slide, i) => (
        <div
          key={slide.titulo}
          className={`carrusel__slide${i === indice ? " carrusel__slide--activo" : ""}`}
          aria-hidden={i !== indice}>
          <img className="carrusel__imagen" src={slide.imagen} alt="" />
          <h2>{slide.titulo}</h2>
          <p>{slide.texto}</p>
        </div>
      ))}
      <div className="carrusel__flechas">
        <button type="button" aria-label="Anterior" onClick={() => mover(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Siguiente" onClick={() => mover(1)}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Carrousel;
