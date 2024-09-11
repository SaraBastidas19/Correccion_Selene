document.addEventListener('DOMContentLoaded', () => {
    // Cargamos los datos del usuario desde el localStorage y los mostramos en el formulario
    const loadRegistro1Data = () => {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users && users.length > 0) {
            const user = users[users.length - 1];
            document.getElementById('full-name').value = user.fullName;
            document.getElementById('username').value = user.username;
        }
    };

    // Guardamos los datos del segundo registro (fecha de nacimiento, ciclo, etc.)
    const saveRegistro2 = () => {
        const birthdate = document.getElementById('birthdate').value;
        const lastCycle = document.getElementById('last-cycle').value;
        const sexualActivity = document.querySelector('input[name="sexual-activity"]:checked').value;
        const recoveryEmail = document.getElementById('recovery-email').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users[users.length - 1];  // Obtenemos el último usuario registrado

        // Actualizamos los datos del usuario
        user.birthdate = birthdate;
        user.lastCycle = lastCycle;
        user.sexualActivity = sexualActivity;
        user.recoveryEmail = recoveryEmail;

        // Guardamos los cambios en el localStorage
        users[users.length - 1] = user;
        localStorage.setItem('users', JSON.stringify(users));

        // Actualizamos el usuario activo
        localStorage.setItem('activeUser', JSON.stringify(user));
    };

    const registro2Form = document.getElementById('registro2Form');
    if (registro2Form) {
        registro2Form.addEventListener('submit', (event) => {
            event.preventDefault();  // Prevenimos la recarga automática de la página
            saveRegistro2();
            alert('Usuario registrado correctamente.');
            window.location.href = 'inicio.html';  // Redirigimos al inicio
        });
    }

    // Cargamos los datos del primer registro cuando sea necesario
    if (document.title === 'Registro 2 - Selene') {
        loadRegistro1Data();
    }
});
