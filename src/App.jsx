import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import ProductCard from "./components/ProductCard";
import ProductSkeleton from "./components/ProductSkeleton";
import CharacterCard from "./components/CharacterCard";

//import products from "./data/product";

// APP:
function App() {
  const [productos, setProductos] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [catalogo, setCatalogo] = useState(productos);
  // Carga:
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  // Personajes:
  const [personajes, setPersonajes] = useState([]);
  const [cargandoPersonajes, setCargandoPersonajes] = useState(true);
  const [errorPersonajes, setErrorPersonajes] = useState("");

  // Llamada a API:

  //Productos:
  useEffect(() => {
    async function cargarProductos() {
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products");
        if (!respuesta.ok) {
          throw new Error(
            `Error ${respuesta.status}: no se pudieron cargar los productos`,
          );
        }
        const datos = await respuesta.json();
        const productosAdaptados = datos.map((p) => ({
          id: p.id,
          imagen: p.image,
          nombre: p.title,
          categoria: p.category,
          precio: p.price,
          stock: p.rating.count,
        }));
        setProductos(productosAdaptados);
        setCatalogo(productosAdaptados);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    }
    cargarProductos();
  }, []);

  //Personajes:
  useEffect(() => {
    async function cargarPersonajes() {
      try {
        const respuesta = await fetch(
          "https://rickandmortyapi.com/api/character",
        );
        if (!respuesta.ok) {
          throw new Error(
            `Error ${respuesta.status}: no se pudieron cargar los personajes`,
          );
        }
        const datos = await respuesta.json();
        // La API devuelve { info, results }; origin y location son objetos.
        const personajesAdaptados = datos.results.map((p) => ({
          id: p.id,
          nombre: p.name,
          estatus: p.status,
          genero: p.gender,
          origen: p.origin.name,
          locacion: p.location.name,
          imagen: p.image,
        }));
        setPersonajes(personajesAdaptados);
      } catch (error) {
        setErrorPersonajes(error.message);
      } finally {
        setCargandoPersonajes(false);
      }
    }
    cargarPersonajes();
  }, []);

  // Tiempo de mensaje
  useEffect(() => {
    if (!mensaje) return;
    const id = setTimeout(() => setMensaje(""), 3000);
    return () => clearTimeout(id);
  }, [mensaje]);

  function handleAgregarProducto(producto) {
    setCantidadCarrito((cantidadActual) => cantidadActual + 1);
    setCatalogo((actual) =>
      actual.map((p) =>
        p.id === producto.id ? { ...p, stock: p.stock - 1 } : p,
      ),
    );
    setMensaje(`${producto.nombre} fue agregado exitosamente al carrito`);
  }

  return (
    <div className="app">
      <Header cantidadCarrito={cantidadCarrito} />
      <main className="contenido-principal">
        <Hero />
        <Carrousel />
        <section className="seccion-productos" id="productos">
          <div className="titulo-seccion">
            <p> Catálogo </p>
            <h2> Productos Destacados </h2>
          </div>

          {mensaje && <div className="mensaje-exito">{mensaje}</div>}
          {error && <div className="mensaje-error"> ⚠️ {error}</div>}

          <div className="catalogo" aria-busy={cargando}>
            {cargando &&
              Array.from({ length: 8 }, (_, i) => <ProductSkeleton key={i} />)}
            {catalogo.map((product) => (
              <ProductCard
                key={product.id}
                imagen={product.imagen}
                nombre={product.nombre}
                categoria={product.categoria}
                precio={product.precio}
                stock={product.stock}
                onAgregar={() => handleAgregarProducto(product)}
              />
            ))}
          </div>
        </section>
        <section className="seccion-productos" id="personajes">
          <div className="titulo-seccion">
            <p> Personajes </p>
            <h2> Personajes de Rick and Morty</h2>
          </div>

          {errorPersonajes && (
            <div className="mensaje-error"> ⚠️ {errorPersonajes}</div>
          )}

          <div className="catalogo" aria-busy={cargandoPersonajes}>
            {cargandoPersonajes &&
              Array.from({ length: 8 }, (_, i) => <ProductSkeleton key={i} />)}
            {personajes.map((personaje) => (
              <CharacterCard
                key={personaje.id}
                imagen={personaje.imagen}
                nombre={personaje.nombre}
                estatus={personaje.estatus}
                genero={personaje.genero}
                origen={personaje.origen}
                locacion={personaje.locacion}
              />
            ))}
          </div>
        </section>

        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
