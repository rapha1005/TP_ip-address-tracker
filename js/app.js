const $ipAddressForm = document.querySelector(".ip-address-form");

const $ipAddressValue = document.querySelector("#ip-address-value");
const $ipAddressLocation = document.querySelector("#ip-address-location");
const $ipAddressTimezone = document.querySelector("#ip-address-timezone");
const $ipAddressIsp = document.querySelector("#ip-address-isp");

const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

async function getIpInfo() {
  const res = await fetch("/data/data.json");
  const ipInfo = await res.json();

  console.log(ipInfo);
  $ipAddressValue.textContent = ipInfo.ip;
  $ipAddressLocation.textContent = `${ipInfo.location.region} ${ipInfo.location.country}`;
  $ipAddressTimezone.textContent = `UTC ${ipInfo.location.timezone}`;
  $ipAddressIsp.textContent = ipInfo.isp;
}

$ipAddressForm.addEventListener("click", function (e) {
  e.preventDefault();

  const $ipAddressInput = document.querySelector(".ip-address-input");
  const ipAddress = $ipAddressInput.value;

  console.log("The IP Address is ", ipAddress);

  getIpInfo();
});
