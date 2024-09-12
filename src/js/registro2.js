document.addEventListener('DOMContentLoaded', () => {
    // Cargamos los datos del usuario activo desde el localStorage
    const loadRegistro1Data = () => {
        const activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (activeUser) {
            console.log('Usuario activo cargado desde localStorage:', activeUser);
            const fullNameInput = document.getElementById('full-name');
            const usernameInput = document.getElementById('username');
            if (fullNameInput && usernameInput) {
                fullNameInput.value = activeUser.fullName;
                usernameInput.value = activeUser.username;
            } else {
                console.error('No se encontraron los elementos del DOM con los IDs esperados.');
            }
        } else {
            console.log('No se encontró ningún usuario activo en localStorage.');
        }
    };

    // Guardamos los datos del segundo registro
    const saveRegistro2 = () => {
        const birthdate = document.getElementById('birthdate').value;
        const lastCycle = document.getElementById('last-cycle').value;
        const sexualActivity = document.querySelector('input[name="sexual-activity"]:checked').value;
        const recoveryEmail = document.getElementById('recovery-email').value;

        // Validar la fecha de nacimiento
        const birthdateValue = new Date(birthdate);
        const today = new Date();
        if (birthdateValue > today) {
            alert('La fecha de nacimiento no puede ser en el futuro.');
            return;
        }

        // Validar el email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(recoveryEmail)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        // Obtener el usuario activo y actualizar sus datos
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let activeUser = JSON.parse(localStorage.getItem('activeUser'));

        if (activeUser) {
            activeUser.birthdate = birthdate;
            activeUser.lastCycle = lastCycle;
            activeUser.sexualActivity = sexualActivity;
            activeUser.recoveryEmail = recoveryEmail;

            // Actualizamos el array de usuarios
            const userIndex = users.findIndex(user => user.username === activeUser.username);
            users[userIndex] = activeUser;

            // Guardar los cambios en localStorage
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('activeUser', JSON.stringify(activeUser));
        }

        // Mensaje de confirmación y redirigir
        alert('Usuario registrado correctamente.');
        window.location.href = 'inicio.html';
    };

    const registro2Form = document.getElementById('registro2Form');
    if (registro2Form) {
        registro2Form.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevenir la recarga automática
            saveRegistro2();
        });
    }

    // Cargar los datos del primer registro
    if (document.title === 'Registro 2 - Selene') {
        loadRegistro1Data();
    }
});
