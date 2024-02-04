/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Iftikaar Gaffoor",
    photo: "images/24991ebb-3051-4dcd-bc59-3663f2dc6bcb.jpeg",
    favoriteFood: ["Peanut butter sauce","Burger","Beans"],
    hobbies: ["Anime", "Coding", "Basketball", "Dance", "Video gaming"],
    placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: "Durban, South Africa",
        length: "6 years"
    },
    {
        place: "Johnnesburg, South Africa",
        length: "12 years",
    },
    {
        place: "Boksburg, South Africa",
        length: "3 years"
    }
    
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let bullets =  document.createElement("li");
    bullets.textContent = food;
    document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let bullets = document.createElement("li");
    bullets.textContent = hobby;
    document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
})
