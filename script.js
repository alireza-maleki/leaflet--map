// === Geo Location ===
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

// === latlng 7hoz ===
// 35.72994, 771.493692
