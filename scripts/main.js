// Toggle del menú lateral en dispositivos móviles
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Selecciona todos los ítems del menú
const menuItems = document.querySelectorAll('.sidebar-menu a');

// Función para manejar la selección de ítems
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los ítems
        menuItems.forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        // Agrega la clase 'active' al ítem seleccionado
        item.classList.add('active');
    });
});
