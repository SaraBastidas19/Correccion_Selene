document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Obtener los valores del formulario
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            // Validar campos vacíos
            if (!username || !password) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            try {
                // Obtener los usuarios guardados en el localStorage
                let users = JSON.parse(localStorage.getItem('users')) || [];

                console.log('Usuarios en el localStorage:', users); // Depuración

                // Buscar el usuario con el nombre de usuario y contraseña coincidentes
                let user = users.find(user => user.username === username && user.password === password);

                if (user) {
                    // Si el usuario existe, guardarlo como el usuario activo
                    localStorage.setItem('activeUser', JSON.stringify(user));

                    console.log('Usuario activo:', user); // Depuración

                    alert('Inicio de sesión exitoso.');
                    window.location.href = 'inicio.html';  // Redirigir al inicio
                } else {
                    // Si el usuario no existe o la contraseña es incorrecta
                    alert('Nombre de usuario o contraseña incorrectos.');
                }
            } catch (error) {
                console.error('Error al acceder al localStorage:', error);
                alert('Hubo un error al iniciar sesión. Intente de nuevo.');
            }
        });
    }
});
