//Credenciales (sacadas del Trello)
const credenciales = {
    email: "estudiante@guayerd.com",
    password: "123456",
};
//Declaro la variable form y traigo la info del login
const form = document.querySelector("#form");
//
form.addEventListener("submit", (event) => {
    event.preventDefault();
    //Declaro las variables
    let userEmail = document.getElementById("userEmail").value
    let userPassword = document.getElementById("userPassword").value
    //Comparo las variables que declaré con el valor del input para ver si me manda al mapa o sale el alert
    if (userEmail === credenciales.email && userPassword === credenciales.password) {
        localStorage.setItem("logged", "true")
        window.location.href = "./map.html"
    } else {
        alert("Email o Contraseña inválidos")
    }
})