document.addEventListener('DOMContentLoaded', () => {
    const saveRegistro1 = () => {
        const fullName = document.getElementById('full-name').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validar que todos los campos estén completos
        if (!fullName || !username || !password || !confirmPassword) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.');
            return;
        }

        // Obtener usuarios existentes del localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Validar si ya existe un usuario con el mismo nombre de usuario
        const userExists = users.some(user => user.username === username);
        
        if (userExists) {
            alert('El nombre de usuario ya está registrado. Por favor, elige otro.');
            return;
        }

        // Si el usuario no existe, continuar con el registro
        const user = {
            fullName,
            username,
            password
        };

        // Agregar el nuevo usuario al array de usuarios y guardar en localStorage
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        // Guardar el usuario activo
        localStorage.setItem('activeUser', JSON.stringify(user));

        console.log('Usuarios después de guardar:', JSON.parse(localStorage.getItem('users')));
        console.log('Usuario activo después de guardar:', JSON.parse(localStorage.getItem('activeUser')));

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
