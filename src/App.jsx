import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import ProductCard from "./components/ProductCard";
import ProductSkeleton from "./components/ProductSkeleton";

//import products from "./data/product";

// APP:
function App() {
  const [productos, setProductos] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const [catalogo, setCatalogo] = useState(productos);
  // carga:
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Llamada a API:
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
            {cargando && Array.from({ length: 8 }, (_, i) => <ProductSkeleton key={i} />)}
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

        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
