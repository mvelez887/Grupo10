

document.addEventListener("DOMContentLoaded", function () {
  var map = L.map("map").setView([-31.2369, -64.4725], 10); // Coordenadas del centro del mapa

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
  }).addTo(map);

  // Añadir marcadores
  var locations = [
    { name: "Agua de Oro", coordinates: [-31.0012, -64.3317] },
    { name: "Ascochinga", coordinates: [-31.1657, -64.2981] },
    { name: "Colonia Caroya", coordinates: [-31.0815, -64.0038] },
    { name: "Jesús María", coordinates: [-30.9775, -64.0944] },
    { name: "La Calera", coordinates: [-31.3269, -64.3202] },
    { name: "La Granja", coordinates: [-31.0323, -64.3209] },
    { name: "Mendiolaza", coordinates: [-31.2568, -64.3138] },
    { name: "Saldan", coordinates: [-31.3979, -64.2641] },
    { name: "Salsipuedes", coordinates: [-31.1788, -64.2044] },
    { name: "Unquillo", coordinates: [-31.2895, -64.3128] },
    { name: "Villa Allende", coordinates: [-31.2915, -64.3005] }
];
  locations.forEach(function (location) {
      L.marker(location.coordinates).addTo(map)
          .bindPopup(location.name);
  });
});


/*SLIDER*/

let sliderImages = document.querySelectorAll(".slide"),
     arrowLeft = document.querySelector("#arrow-left"),
     arrowRight = document.querySelector("#arrow-right"),
     current = 0;
   
   // Clear all images
   function reset() {
     for (let i = 0; i < sliderImages.length; i++) {
       sliderImages[i].style.display = "none";
     }
   }
   
   // Init slider
   function startSlide() {
     reset();
     sliderImages[0].style.display = "block";
   }
   
   // Show prev
   function slideLeft() {
     reset();
     sliderImages[current - 1].style.display = "block";
     current--;
   }
   
   // Show next
   function slideRight() {
     reset();
     sliderImages[current + 1].style.display = "block";
     current++;
   }
   
   // Left arrow click
   arrowLeft.addEventListener("click", function() {
     if (current === 0) {
       current = sliderImages.length;
     }
     slideLeft();
   });
   
   // Right arrow click
   arrowRight.addEventListener("click", function() {
     if (current === sliderImages.length - 1) {
       current = -1;
     }
     slideRight();
   });
   
   startSlide();
   
/*VALIDACION FORMULARIO*/

function validateForm() {
  // Obtener valores de los campos
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Expresión regular para validar el formato del correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar que todos los campos estén llenos
  if (name === "" || email === "" || message === "") {
    alert("Todos los campos son obligatorios");
    return false;
  }

  // Validar el formato del correo electrónico
  if (!emailRegex.test(email)) {
    alert("Ingrese un correo electrónico válido");
    return false;
  }

  // Si todo está bien, permitir el envío del formulario
  return true;
}
   
