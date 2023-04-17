//-------Création des cases -----------------------------------------
const carre = document.createElement("div")
carre.classList.add("carre")

//-------Déclaration des joueurs ------------------------------------
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

for(let i = 1; i <= 9; i++){
    const newCarre = carre.cloneNode();
    newCarre.innerText = ""
    square.appendChild(newCarre)

    newCarre.addEventListener("click", function(){
        if(newCarre.classList.contains("clicked")){
            
        } else {
            newCarre.classList.add("clicked")
        }
        newCarre.classList.add("clicked");

        //Un symbole sur deux 
        newCarre.innerText = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    })
}
//--------Création bouton---------------------------------
const button = document.createElement("button");
button.innerText = "Restart";
button.addEventListener("click", function () {
  const squares = document.querySelectorAll(".carre");
  squares.forEach((square) => {
    square.classList.remove("clicked");
    square.innerText = "";
  });
  button.classList.add("clicked");
});

document.querySelector(".score").appendChild(button);

//--------Combinaisons gagnantes---------------------------------


//--------Vérifier si victoire ou nul ---------------------------


//--------Affichage des messages---------------------------------