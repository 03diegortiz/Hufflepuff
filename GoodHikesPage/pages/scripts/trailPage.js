// gets the URL parameters and stores the selected hike ID
const params = new URLSearchParams(window.location.search);
const hikeId = params.get("id");

let selectedHike;

for (let hike of hikes) {
    if (hike.id === hikeId) {
        selectedHike = hike;
        break;
    }
}

document.querySelector("#hikeName").textContent = selectedHike.name;
document.querySelector("#Location").textContent = selectedHike.location;
document.querySelector("#Location").textContent = selectedHike.location;
document.querySelector("#Difficulty").textContent = selectedHike.difficulty;
document.querySelector("#TrailType").textContent = selectedHike.trailType;
document.querySelector("#Distance").textContent = selectedHike.distance + " miles";
document.querySelector("#EstTime").textContent = selectedHike.estimatedTime;
document.querySelector("#Elevation").textContent = selectedHike.elevationGain + " feet";
document.querySelector("#Parking").textContent = selectedHike.parking;
document.querySelector("#Fee").textContent = selectedHike.entranceFee;
document.querySelector("#Pets").textContent = selectedHike.pets;
document.querySelector("#Scenery").textContent = selectedHike.scenery;

document.querySelector("#hikeImage").src = selectedHike.image;
document.querySelector("#hikeMap").src = selectedHike.map;

