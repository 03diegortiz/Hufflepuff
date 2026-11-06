// gets the URL parameters and stores the selected hike ID
const params = new URLSearchParams(window.location.search);
const hikeId = params.get("id");

let selectedHike;

//loop through hikes and match the hikeID in the URL
for (let hike of hikes) {
    if (hike.id === hikeId) {
        selectedHike = hike;
        break;
    }
}

//assign the hike content to the main html page
document.querySelector("#hikeName").textContent = selectedHike.name;
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

//color assignment to difficulty level
difficultyColor = document.querySelector("#difficultyColor");
if (selectedHike.difficulty === "Easy") {
    difficultyColor.style.backgroundColor = "rgb(47, 222, 28, 40%)";
    difficultyColor.style.borderBottom = "2px solid rgb(52, 196, 42)";
} else if (selectedHike.difficulty === "Medium") {
    difficultyColor.style.backgroundColor = "rgb(248, 232, 57, 40%)";
    difficultyColor.style.borderBottom = "2px solid rgb(237, 237, 22)";
} else if (selectedHike.difficulty === "Hard") {
    difficultyColor.style.backgroundColor = "rgb(255, 115, 0, 50%)";
    difficultyColor.style.borderBottom = "2px solid rgb(242, 150, 21)";
} else {
    difficultyColor.style.backgroundColor = "rgb(255, 12, 12, 40%)";
    difficultyColor.style.borderBottom = "2px solid rgb(182, 42, 42)";
}
