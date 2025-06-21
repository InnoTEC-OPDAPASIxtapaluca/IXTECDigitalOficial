const textoAnimado = document.querySelector('.texto-animado');

// Ejemplo: Pausar la animación al hacer clic
textoAnimado.addEventListener('click', () => {
    textoAnimado.style.animationPlayState = 
        (textoAnimado.style.animationPlayState === 'paused') ? 'running' : 'paused';
});