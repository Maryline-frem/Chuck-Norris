function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function changePunchlines() {

    let color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;

    let textElem = document.querySelector("#punchlines");
    textElem.innerHTML = punchlines[getRandomInt(punchlines.length)];    
    textElem.style.color = color;

    let authorElem = document.querySelector("#author");
    console.log(authorElem);
    authorElem.style.color = color;

    let mainElem = document.querySelector("#main");
    console.log(mainElem);
    mainElem.style.backgroundColor = color;

    let colorBtn = document.querySelector("#btn");
    console.log(colorBtn);
    colorBtn.style.backgroundColor = color;

}

let punchlines = ["Je mets les pieds où je veux, Little John… Et c’est souvent dans la gueule.", 
"Toi tu commences à me baver sur les rouleaux.", 
"Google, c’est le seul endroit où tu peux taper Chuck Norris !",
"Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l’échec.",
"Jesus Christ est né en 1940 avant Chuck Norris.",
"Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes.",
"Rien ne sert de chercher les pokemons.  Chuck Norris les a déjà tous attraper.",
"Selon certaines sources, il y aurait un spermatozoïde de Chuck Norris dans un lac écossais…",
"Le dernier a avoir serré la main à Chuck Norris c’est Jamel Debbouze."];

changePunchlines();

let myButton = document.querySelector("#btn");
console.log(myButton);

myButton.addEventListener("click", changePunchlines);