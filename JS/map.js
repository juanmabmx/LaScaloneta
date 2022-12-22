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
  {
    jugador: "Franco Armani",
    coordenada: [-33.044166666667, -61.168055555556],
    ciudad: "Casilda",
  },
  {
    jugador: "Cristian Romero",
    coordenada: [-31.40470964374498, -64.18868281648258],
    ciudad: "Ciudad de Córdoba",
  },
  {
    jugador: "Nicolás Tagliafico",
    coordenada: [-34.789688220567804, -58.35371569005798],
    ciudad: "Rafael Calzada",
  },
  {
    jugador: "Gonzalo Montiel",
    coordenada: [-34.770833333333, -58.646388888889],
    ciudad: "González Catán",
  },
  {
    jugador: "Marcos Acuña",
    coordenada: [-38.902777777778, -70.065],
    ciudad: "Zapala",
  },
  {
    jugador: "Alejandro Gómez",
    coordenada: [-34.604097196973136, -58.38214335777374],
    ciudad: "CABA",
  },
  {
    jugador: "Rodrigo De Paul",
    coordenada: [-34.68298823132669, -58.34402314063366],
    ciudad: "Sarandí",
  },
  {
    jugador: "Enzo Fernández",
    coordenada: [-34.566666666667, -58.533333333333],
    ciudad: "San Martín",
  },
  {
    jugador: "Alexis Mac Allister",
    coordenada: [-36.620277777778, -64.290555555556],
    ciudad: "Ciudad de Santa Rosa",
  },
  {
    jugador: "Lautaro Martínez",
    coordenada: [-38.71547032889691, -62.25671577276661],
    ciudad: "Bahía Blanca",
  },
  {
    jugador: "Paulo Dybala",
    coordenada: [-31.776388888889, -63.801111111111],
    ciudad: "Laguna Larga",
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
