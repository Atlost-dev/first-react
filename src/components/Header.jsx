function Header({ cantidadCarrito }) {
  return (
    <header className="encabezado">
      <div>
        <h1>Tech-Store</h1>
        <p>Tecnología para estudiar, trabajar y crear.</p>
      </div>
      <nav className="navegacion">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#personajes">Personajes</a>
        <a href="#nosotros"> Sobre Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div className="carrito-resumen">
        <var className="variable-cantidad">{cantidadCarrito}</var> 🛒
      </div>
    </header>
  );
}

export default Header;
