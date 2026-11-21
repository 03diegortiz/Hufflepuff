/* ADD FAVORITES */
//call the display function
displayFavorites();
displayNotes();

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
function addNotes() {
    const notes = document.getElementById("hikeNotes").value;

    let savedNotes = [];
    let storedNotes = localStorage.getItem("hikeNotes");

    if (storedNotes !== null && storedNotes !== "") {
        savedNotes = storedNotes.split("|");
    }

    let newNote = selectedHike.name + ": " + notes;

    savedNotes.push(newNote);

    localStorage.setItem("hikeNotes", savedNotes.join("|"));
}

function displayNotes() {
    let savedNotes = [];
    let storedNotes = localStorage.getItem("hikeNotes");

    if (storedNotes !== null && storedNotes !== "") {
        savedNotes = storedNotes.split("|");
    }

    const notes = document.querySelector("#notes");

    // clear prev notes
    notes.innerHTML = "";

    //loop throught Data, if hike names match, update innerHTML to show hike name and note
    for (const hike of hikes) {
        const article = document.createElement("article");
        article.className = "notes-card";
        article.innerHTML = `<h3>${hike.name}</h3>`;
        let hasNotes = false;

        for(const note of savedNotes) {
            //stored as ["hike-name", "note"]
            let noteSplit = note.split(": ");

            if(noteSplit[0] === hike.name) {
                hasNotes = true;
                const hikeNote = document.createElement("p");
                hikeNote.textContent = "-" + noteSplit[1];
                article.appendChild(hikeNote);
            }
        }

        if (hasNotes == true) {
            const removeNotes = document.createElement("button");
            removeNotes.textContent = "-"
            article.appendChild(removeNotes);
            notes.appendChild(article);

            removeNotes.addEventListener("click", () => {

            // Loop backwards through saved notes
            for (let i = savedNotes.length - 1; i >= 0; i--) {
                let noteSplit = savedNotes[i].split(": ");

                // Remove all notes associated with this hike
                if (noteSplit[0] === hike.name) {
                    savedNotes.splice(i, 1);
                }
            }
            // Update localStorage
            localStorage.setItem("hikeNotes", savedNotes.join("|"));

            // Remove the entire article from the page
            article.remove();
            });
        }
    }
}