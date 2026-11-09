function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <p>{anioActual} Tech-Store</p>
    </footer>
  );
}

export default Footer;
