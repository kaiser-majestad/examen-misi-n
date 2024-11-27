function cambiarFondo(elemento) {
    elemento.style.backgroundColor = "yellow";
  }
  
  const elementos = document.querySelectorAll("li");
  
  elementos.forEach(cambiarFondo);
  