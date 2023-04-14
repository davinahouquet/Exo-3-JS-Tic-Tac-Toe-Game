//-------Création des cases -----------------------------------------------------
const carre = document.createElement("div")
carre.classList.add("carre")

const square = document.querySelector("#square")

const PLAYER_1 = "X";
const PLAYER_2 = "O";
let currentPlayer = PLAYER_1;

const board = [ 
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

const squares = document.querySelectorAll(".carre");


for(let i = 1; i <= 9; i++){
    const newCarre = carre.cloneNode();

    newCarre.innerText = ""
    square.appendChild(newCarre)

    newCarre.addEventListener("click", function(){
        if(newCarre.classList.contains("clicked")){
            newCarre.classList.remove("clicked")
        } else {
            newCarre.classList.add("clicked")
        }
        newCarre.classList.add("clicked");
        newCarre.innerText = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";

    })
    square.appendChild(newCarre)
}
