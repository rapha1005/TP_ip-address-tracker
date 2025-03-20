const $ipAdress = document.querySelector('#ip-address-value')
const $ipLocation = document.querySelector('#ip-address-location')
const $ipTimezone = document.querySelector('#ip-address-timezone')
const $ipIsp = document.querySelector('#ip-address-isp')
const $ipAdressInput = document.querySelector('.ip-address-input')
const $ipSubmitBtn = document.querySelector('button')


const map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap",
  }).addTo(map);
  

async function fetchData(){
    let ipInfo 
    await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Zy36qVZIlQGWMDUwujO2WExovkWeB&ipAddress=${$ipAdressInput.value}`)
        .then(res => res.json())
        .then(data => ipInfo = data)

    console.log(ipInfo)


    $ipAdress.innerHTML = ipInfo.ip
    $ipLocation.innerHTML = `${ipInfo.location.region}, ${ipInfo.location.country}`
    $ipTimezone.innerHTML =  `UTC ${ipInfo.location.timezone}`
    $ipIsp.innerHTML = ipInfo.isp

    if(ipInfo.location.lat != undefined){
        map.setView([ipInfo.location.lat, ipInfo.location.lng]);
    }
}

$ipSubmitBtn.addEventListener('click',function(e){
    e.preventDefault()

    fetchData()
})