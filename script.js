//-------Création des cases -----------------------------------------//
const carre = document.createElement("div")
carre.classList.add("carre")

//-------Déclaration des joueurs ------------------------------------//
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

const squares = [];

for(let i = 1; i <= 9; i++){
    const newCarre = carre.cloneNode();
    newCarre.innerText = ""
    square.appendChild(newCarre)

    newCarre.addEventListener("click", function(){
        if(newCarre.classList.contains("clicked")){
            return;
        } else {
            newCarre.classList.add("clicked");
        }

        //Un symbole sur deux 
        newCarre.innerText = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;

        if (checkWin(squares)) {
            squares.forEach((square) => {
              square.classList.add("clicked");
            });
          }
        });
    }

//--------Création bouton---------------------------------//
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

//--------Combinaisons gagnantes---------------------------------//

function checkWin(squares) {

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  
    [0, 4, 8], [2, 4, 6]              
  ];
  for (let i = 0; i < winningCombinations.length; i++) {

    const combinations = winningCombinations[i];
    const a = squares[combinations[0]].innerText;
    const b = squares[combinations[1]].innerText;
    const c = squares[combinations[2]].innerText;

    if (a !== "" && a === b && b === c) {
      return true;
    }
  }
  return false;
}
const winningMessage = document.getElementById("winningMessage");

  //--------Vérifier si nul ---------------------------//
  function isDraw() {
    const squares = document.querySelectorAll(".carre");
    return Array.from(squares).every(square => square.innerText !== '');
    
  }
  
  function handleResultValidation() {
    const winner = checkWin();
    if (winner) {

      // Afficher gagnant
      document.getElementById("winningMessageText").innerText = `${winner} wins!`;
      document.querySelectorAll(".carre").forEach(square => square.removeEventListener("click", handleClick));
    } else if (isDraw()) {

      // Afficher match nul
      document.getElementById("winningMessageText").innerText = "Draw!";
    } else {

      // Afficher quel joueur à la main
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      document.getElementById("turn-message") = `${currentPlayer}'s turn`;
    }
  }
  
  function handleClick(event) {
    const square = event.target;
    if (square.innerText === "") {
      square.innerText = currentPlayer;
      square.classList.add("clicked");
      square.removeEventListener("click", handleClick);
    }
  }
