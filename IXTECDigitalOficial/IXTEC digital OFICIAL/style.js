// Animación de texto animado
const textoAnimado = document.querySelector('.texto-animado');

if(textoAnimado) {
  // Pausar o reanudar la animación al hacer clic
  textoAnimado.addEventListener('click', () => {
    textoAnimado.style.animationPlayState =
      (textoAnimado.style.animationPlayState === 'paused') ? 'running' : 'paused';
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const enlacesMenu = document.querySelectorAll('nav a[href^="#"]');
  const secciones = document.querySelectorAll('main section');

  enlacesMenu.forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);

      secciones.forEach(sec => {
        sec.classList.remove('seccion-activa');
        sec.classList.add('seccion-oculta');
      });

      const seccionVisible = document.getElementById(id);
      if (seccionVisible) {
        seccionVisible.classList.remove('seccion-oculta');
        seccionVisible.classList.add('seccion-activa');
      }
    });
  });
});