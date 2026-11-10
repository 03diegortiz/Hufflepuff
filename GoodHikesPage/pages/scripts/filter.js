
const difficultyFilter = document.getElementById("difficultyFilter");
const trailCards = document.querySelectorAll(".trail-card");

difficultyFilter.addEventListener("change", function () {
    const selectedDifficulty = difficultyFilter.value;

    trailCards.forEach(function (card) {
        const trailDifficulty = card.dataset.difficulty;

        if (selectedDifficulty === "All" || trailDifficulty === selectedDifficulty) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});