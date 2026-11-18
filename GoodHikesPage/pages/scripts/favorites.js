/* ADD FAVORITES */
//call the display function
displayFavorites();

//function called when add to favorites button is pressed
function addToFavorites() {
    //checks for saved hikes from local storage, split the string and store in new array
    let favoriteHikes = [];
    let savedHikes = localStorage.getItem("favorites");
    if (savedHikes !== null && savedHikes !== "") {
        favoriteHikes = savedHikes.split(",");
    }

    //makes sure it does not include selected hike already, then add it to our array, then updated localStorage
    if (!favoriteHikes.includes(selectedHike.id)) {
        favoriteHikes.push(selectedHike.id);
        localStorage.setItem("favorites", favoriteHikes);
    }
    
    console.log(localStorage.getItem("favorites"));
}

//function that displays trail-cards
function displayFavorites() {
    //check for saved hikes in local storage
    let favoriteHikes = [];
    let savedHikes = localStorage.getItem("favorites");
    if (savedHikes !== null && savedHikes !== "") {
        favoriteHikes = savedHikes.split(",");
    }

    //select favorites container
    const favCards = document.querySelector("#fav-container");

    if (favoriteHikes.length > 0) {
    favCards.textContent = "";
    }
    
    //loop through hike data, if IDs match, update innerHTML to show hike info
    for(let hike of hikes) {
        if(favoriteHikes.includes(hike.id)) {

            //create article element
            const article = document.createElement("article");
            article.className = "favorite-card";
            article.innerHTML = `
                <a href="trailPage.html?id=${hike.id}">
                    <img src="${hike.image}" alt="${hike.name}">
                </a>
                <h2><a href="trailPage.html?id=${hike.id}">${hike.name}</a></h2>
                <p>Difficulty: ${hike.difficulty}</p>
                <p>Distance: ${hike.distance} miles</p>
                <p>Location: ${hike.location}</p>
                <button class="remove-btn">Remove</button>
            `;//creates remove btn in html

            //add article as child of favorites container
            favCards.appendChild(article);

            //select and style remove btn
            const removeBtn = article.querySelector(".remove-btn");
            removeBtn.style.backgroundColor = "rgb(217, 184, 64)";
            removeBtn.style.borderRadius = "5px";
            removeBtn.style.border = "1px solid black";

            //gets index of hike, removes it from array using splice, then updates local storage
            removeBtn.addEventListener("click", function(){
                let index = favoriteHikes.indexOf(hike.id);
                
                favoriteHikes.splice(index, 1);
                localStorage.setItem("favorites", favoriteHikes);
                article.remove();

                if (favoriteHikes.length === 0) {
                    favCards.textContent = "No hikes saved";
                } 
            });
            
        }
    }
}


/* ADD NOTES */

