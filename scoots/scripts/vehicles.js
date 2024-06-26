const url ="./data/vehicles.json";
const table = document.querySelector("#table");

async function getVehicleData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.vehicles);
  displayVehicles(data.vehicles);
}

const displayVehicles = (vehicles) => {
  vehicles.forEach((vehicle) => {
    let tentry = document.createElement("tr");
    let name = document.createElement("td");
    let halfReserv = document.createElement("td");
    let fullReserv = document.createElement("td");
    let halfWalk = document.createElement("td");
    let fullWalk = document.createElement("td");
    let image = document.createElement("td");

    name.textContent = `${vehicle.type}`;
    halfReserv.textContent = `${vehicle.halfDayReserv}`;
    fullReserv.textContent = `${vehicle.fullDayReserv}`;
    halfWalk.textContent = `${vehicle.halfDayWalkin}`;
    fullWalk.textContent = `${vehicle.fullDayWalkin}`;
    image.innerHTML = `<img class="rentals_img" src="${vehicle.image}" alt="${vehicle.type}">`;

    name.style.fontWeight = "bold";
    tentry.appendChild(name);
    tentry.appendChild(halfReserv);
    tentry.appendChild(fullReserv);
    tentry.appendChild(halfWalk);
    tentry.appendChild(fullWalk);
    tentry.appendChild(image);
    
    table.appendChild(tentry);
  });
};
getVehicleData();
