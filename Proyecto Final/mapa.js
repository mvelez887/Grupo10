var map = L.map('map').setView([-31.13521578003897, -64.14114309674214], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var puntosDeInteres = [
    {
      nombre: '<h1>Agua de Oro<h1>',
      latlng: [-31.062253534161684, -64.30086430226132],
      contenido: `
      <h3 style="font-size: 1.17em;">Encanto histórico con arquitectura colonial.</h3>
      <h4 style="font-size: 1.17em;">Rodeado de paisajes naturales y actividades al aire libre.<h4>
      <a href="agua_de_oro.html">Enlace a la página de Agua de Oro</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Ascochinga<h1>',
      latlng: [-30.94213634397098, -64.27737281146477],
      contenido: `
      <h3 style="font-size: 1.17em;">Destino de golf reconocido internacionalmente.</h3>
      <h4 style="font-size: 1.17em;">Hermosos paisajes serranos y opciones de ecoturismo.<h4>
      <a href="ascochinga.html">Enlace a la página de Ascochinga</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Colonia Caroya<h1>',
      latlng: [-31.016892450511886, -64.04856215589116],
      contenido: `
      <h3 style="font-size: 1.17em;">Cuna de la tradición vitivinícola.</h3>
      <h4 style="font-size: 1.17em;">Gastronomía única con influencia italiana.<h4>
      <a href="colonia_caroya.html">Enlace a la página de Colonia Caroya</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Jesús María<h1>',
      latlng: [-30.98128362201794, -64.09765730536877],
      contenido: `
      <h3 style="font-size: 1.17em;">Famoso por el Festival Nacional de Doma y Folklore.</h3>
      <h4 style="font-size: 1.17em;">Bodegas y viñedos que ofrecen degustaciones.<h4>
      <a href="jesus_maria.html">Enlace a la página de Jesús María</a>
      <img src="" >`
    },
    {
      nombre: '<h1>La Calera<h1>',
      latlng: [-31.34501067834967, -64.33737206503457],
      contenido: `
      <h3 style="font-size: 1.17em;">Pueblo tranquilo con arquitectura colonial.</h3>
      <h4 style="font-size: 1.17em;">Acceso fácil a la Reserva Natural Los Quebrachitos.<h4>
      <a href="la_calera.html">Enlace a la página de La Calera</a>
      <img src="" >`
    },
    {
      nombre: '<h1>La Granja<h1>',
      latlng: [-31.020981311204455, -64.27313336896243],
      contenido: `
      <h3 style="font-size: 1.17em;">Ideal para el turismo rural y de granjas.</h3>
      <h4 style="font-size: 1.17em;">Atractivos naturales como la Cascada Los Cocos.<h4>
      <a href="la_granja.html">Enlace a la página de La Granja</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Mendiolaza<h1>',
      latlng: [-31.26865674197245, -64.29934212611653],
      contenido: `
      <h3 style="font-size: 1.17em;">Pueblo pintoresco con calles arboladas.</h3>
      <h4 style="font-size: 1.17em;">Ofrece actividades deportivas y senderismo.<h4>
      <a href="mendiolaza.html">Enlace a la página de Mendiolaza</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Saldán<h1>',
      latlng: [-31.273579252326883, -64.3369458811529],
      contenido: `
      <h3 style="font-size: 1.17em;">Destino sereno con opciones de pesca y deportes acuáticos.</h3>
      <h4 style="font-size: 1.17em;">Parques y plazas para disfrutar del aire libre.<h4>
      <a href="saldan.html">Enlace a la página de Saldán</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Salsipuedes<h1>',
      latlng: [-31.136307765023044, -64.29570400454419],
      contenido: `
      <h3 style="font-size: 1.17em;">Naturaleza virgen con arroyos y paisajes montañosos.</h3>
      <h4 style="font-size: 1.17em;">Senderismo y actividades ecoturísticas.<h4>
      <a href="salsipuedes.html">Enlace a la página de Salsipuedes</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Unquillo<h1>',
      latlng: [-31.233586721127953, -64.32119972693133],
      contenido: `
      <h3 style="font-size: 1.17em;">Centro artístico y cultural.</h3>
      <h4 style="font-size: 1.17em;">Ferias de artesanías y eventos culturales.<h4>
      <a href="unquillo.html">Enlace a la página de Unquillo</a>
      <img src="" >`
    },
    {
      nombre: '<h1>Villa Allende<h1>',
      latlng: [-31.294872239179483, -64.29827691711117],
      contenido: `
      <h3 style="font-size: 1.17em;">Destino elegante con campos de golf y spas.</h3>
      <h4 style="font-size: 1.17em;">Actividades recreativas y eventos culturales.<h4>
      <a href="villa_allende.html">Enlace a la página de Villa Allende</a>
      <img src="" >`
    },

  ];

puntosDeInteres.forEach(function(punto) {
  var marcador = L.marker(punto.latlng).addTo(map);
  marcador.bindPopup('<b>' + punto.nombre + '</b><br>' + punto.contenido);
});
