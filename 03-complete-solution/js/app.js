const $ipAddressInput = document.querySelector(".ip-address-input")
const $ipAdressBtn = document.querySelector("button")
const $ipAddressValue = document.querySelector("#ip-address-value")
const $ipAddressLocation = document.querySelector("#ip-address-location")
const $ipAddressTimezone = document.querySelector("#ip-address-timezone")
const $ipAddressIsp = document.querySelector("#ip-address-isp")

const map = L.map("map").setView([51.505, -0.09], 13)

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map)


async function getIpInfo() {
  let ipInfo
  await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_Zy36qVZIlQGWMDUwujO2WExovkWeB&ipAddress=${$ipAddressInput.value}`)
    .then(res => res.json())
    .then(data => ipInfo = data)


  console.log(ipInfo);


  $ipAddressValue.textContent = ipInfo.ip
  $ipAddressLocation.textContent = `${ipInfo.location.region} ${ipInfo.location.country}`
  $ipAddressTimezone.textContent = `UTC ${ipInfo.location.timezone}`
  $ipAddressIsp.textContent = ipInfo.isp

  map.setView([ipInfo.location.lat, ipInfo.location.lng])
}

$ipAdressBtn.addEventListener("click", function (e) {
  e.preventDefault();


  getIpInfo();
});
