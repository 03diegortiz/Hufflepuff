
//Filters for the level of diffculties and parks
const difficultyFilter = document.getElementById("difficultyFilter");
const parkFilter = document.getElementById("parkFilter");
const trailCards = document.querySelectorAll(".trail-card");

difficultyFilter.addEventListener("change", function () {
    filterTrails();
});

parkFilter.addEventListener("change", function () {
    filterTrails();
});

function filterTrails() {
    const selectedDifficulty = difficultyFilter.value;
    const selectedPark = parkFilter.value;
    

    trailCards.forEach(function (card) {
        const trailDifficulty = card.dataset.difficulty;
        const trailPark = card.dataset.park;

        if ((selectedDifficulty === "All" || trailDifficulty === selectedDifficulty) && (selectedPark === "All" || trailPark === selectedPark)) {
            card.style.display = "grid";
        } else {
            card.style.display = "none";
        }
    });
}
