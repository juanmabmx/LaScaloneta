//Logout
if (!localStorage.getItem("logged")) {
  window.location.replace("./index.html");
}
function cerrarSesion() {
  localStorage.removeItem("logged");
}

//Fetch
fetch("./JS/jugadores.json")
.then((response) => response.json())
    .then((data) => {
        const jugadores = data.map((jugador) => {
            return `
            <div class="col-12 col-md-4 p-3 float-start">
                <div class="card h-100 card-style ">
                    <div class="img-wrapper">
                    <span class="NumCamiseta">${jugador.dorsal}</span>
                    <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="Foto Jugador">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${jugador.name}</h5>
                        <p class="card-text">Edad: ${jugador.edad}</p>
                        <p class="card-text">Posición: ${jugador.posicion}</p>
                        <p class="card-text">Peso: ${jugador["stats-fisico"].peso}</p>
                        <p class="card-text">Altura: ${jugador["stats-fisico"].altura}</p>
                        <p class="card-text">Equipo actual: ${jugador["equipo-actual"]}</p>
                        <p class="card-text">Fecha de nacimiento: ${jugador["fecha-nacimiento"]}</p>
                     </div>
                </div>
            </div>
          `;
        });
        const section = document.querySelector("section");
        section.innerHTML = jugadores.join().replaceAll(",", "");
    })
    .catch((error) => console.log(error));