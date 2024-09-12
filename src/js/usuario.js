document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar los datos del usuario en la página de perfil
    function displayUserData() {
        const activeUser = JSON.parse(localStorage.getItem('activeUser'));  // Obtenemos el usuario activo de localStorage

        if (activeUser) {
            // Actualizamos los elementos con la información del usuario
            document.getElementById('displayUsername').textContent = `Nombre de Usuario: ${activeUser.username}`;
            
            // Verificar si hay una fecha de nacimiento válida y mostrar el año de nacimiento
            if (activeUser.birthdate) {
                const birthYear = new Date(activeUser.birthdate).getFullYear();
                if (!isNaN(birthYear)) {
                    document.getElementById('displayBirthYear').textContent = `Año de Nacimiento: ${birthYear}`;
                } else {
                    document.getElementById('displayBirthYear').textContent = "Año de Nacimiento: No disponible";
                }
            } else {
                document.getElementById('displayBirthYear').textContent = "Año de Nacimiento: No disponible";
            }

            document.getElementById('userNameHeader').textContent = activeUser.username; // Encabezado
        } else {
            // Si no hay datos, mostramos valores por defecto
            document.getElementById('displayUsername').textContent = "Nombre de Usuario: No disponible";
            document.getElementById('displayBirthYear').textContent = "Año de Nacimiento: No disponible";
            document.getElementById('userNameHeader').textContent = "User"; // Valor por defecto
        }
    }

    // Llama a la función para mostrar los datos cuando la página se carga
    displayUserData();
});
