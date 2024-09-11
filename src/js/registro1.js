document.addEventListener('DOMContentLoaded', () => {
    const saveRegistro1 = () => {
        const fullName = document.getElementById('full-name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Obtener usuarios existentes del localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Validar si ya existe un usuario con el mismo nombre de usuario
        const userExists = users.some(user => user.username === username);
        
        if (userExists) {
            // Mostrar un mensaje de error si el nombre de usuario ya existe
            alert('El nombre de usuario ya está registrado. Por favor, elige otro.');
            return; // Detener el registro si el usuario ya existe
        }

        // Si el usuario no existe, continuar con el registro
        const user = {
            fullName,
            username,
            password,
            confirmPassword
        };

        // Agregar el nuevo usuario al array de usuarios y guardar en localStorage
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // Guardar el usuario activo
        localStorage.setItem('activeUser', JSON.stringify(user));

        // Redirigir a la siguiente página de registro
        window.location.href = 'registro2.html';
    };

    const registro1Form = document.getElementById('registro1Form');
    if (registro1Form) {
        registro1Form.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevenir el envío del formulario por defecto
            saveRegistro1();
        });
    }
});
