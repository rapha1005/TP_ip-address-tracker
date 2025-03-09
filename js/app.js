const $ipAddressForm = document.querySelector(".ip-address-form");

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

$ipAddressForm.addEventListener("click", function (e) {
  e.preventDefault();

  const $ipAddressInput = document.querySelector(".ip-address-input");
  const ipAddress = $ipAddressInput.value;

  console.log("The IP Address is ", ipAddress);
});
