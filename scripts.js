document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Ocultamos todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Mostramos la sección correspondiente
        const contentId = this.getAttribute('data-content');
        document.getElementById(contentId).style.display = 'block';
    });
});
