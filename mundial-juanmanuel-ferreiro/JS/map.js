if (!localStorage.getItem("logged")) {
  window.location.replace("./index.html");
}
// En coordinates guardamos las coordenadas donde se lugar donde se centra el mapa
let center = [25.2807, 51.5217];
// En la variable map enviamos el centrod de mapa y el zoom inicial (12)
let map = L.map("map", { zoomControl: false }).setView(center, 12);
// Creamos el mapa
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
//Marcador
var marker;
//Array jugadores
const objetoMapa = [
  {
    jugador: "Qatar 2022",
    coordenada: [25.2807, 51.5217],
    ciudad: "World Cup",
  },
  {
    jugador: "Messi",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Di María",
    coordenada: [-32.9520457, -60.766679],
    ciudad: "Rosario",
  },
  {
    jugador: "Otamendi",
    coordenada: [-34.4718607, -58.6715832],
    ciudad: "El Talar",
  },
  {
    jugador: "Julián Álvarez",
    coordenada: [-31.6679028, -63.2032357],
    ciudad: "Calchín",
  },
  {
    jugador: "Dibu Martínez",
    coordenada: [-38.0174106, -57.6705734],
    ciudad: "Mar del Plata",
  },
];

// Select
let select = document.querySelector("select");
let arrayJugadores = objetoMapa.map(
  ({ jugador }) => `<option>${jugador}</option>`
);
select.innerHTML += arrayJugadores;
//Cambio de posicion en el mapa
function changeMap() {
  const objeto = objetoMapa.find((item) => item.jugador === select.value);
  map.setView(new L.LatLng(...objeto.coordenada), 12);
  //Marcador
  marker = L.marker(objeto.coordenada).addTo(map);
  marker.bindPopup(`<b>${objeto.jugador}</b><br>${objeto.ciudad}`).openPopup();
}
//Logout
function cerrarSesion() {
  localStorage.removeItem("logged");
}
