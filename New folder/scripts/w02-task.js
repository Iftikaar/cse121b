/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Iftikaar Gaffoor";

let currentYear = "2024";

let profilePicture = "images/24991ebb-3051-4dcd-bc59-3663f2dc6bcb";




/* Step 3 - Element Variables */


const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imagesElement = document.getElementById("images");


/* Step 4 - Adding Content */


nameElement.innerHTML = "<strong>${fullName}</strong>";

yearElement.textContent = "<strong>${currentYear}</strong>";

imagesElement.setAttribute("24991ebb-3051-4dcd-bc59-3663f2dc6bcb", profilePicture);

imagesElement.setAttribute("Profile picture of ${fullName}", fullName )

/* Step 5 - Array */



let favFood = ["pasta", "mutton curry", "chicken alfredo", "burgers"];


favFood.push("fried chicken", "grilled cheese", "braai meat");

foodElement.innerHTML += "<br>{favFood}";

favFood.pop(0);

foodElement.innerHTML += "<br>{favFood}";