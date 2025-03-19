function filtrarNoticias(criterio) {
    const noticias = Array.from(document.querySelectorAll('.noticia'));
  
    noticias.sort((a, b) => {
      const fechaA = new Date(a.querySelector('.fecha').textContent.split('/').reverse().join('-'));
      const fechaB = new Date(b.querySelector('.fecha').textContent.split('/').reverse().join('-'));
  
      if (criterio === 'recientes') {
        return fechaB - fechaA; // Más recientes primero
      } else if (criterio === 'antiguas') {
        return fechaA - fechaB; // Más antiguas primero
      } else if (criterio === 'vistas') {
        // Aquí puedes implementar la lógica para ordenar por más vistas (necesitarías un sistema de contadores).
        return 0; // Por ahora, no se ordena
      }
    });
  
    const contenedorNoticias = document.querySelector('#noticias');
    contenedorNoticias.innerHTML = '';
    noticias.forEach(noticia => contenedorNoticias.appendChild(noticia));
  }