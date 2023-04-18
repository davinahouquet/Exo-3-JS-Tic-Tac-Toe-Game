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
    square.appendChild(newCarre) //square fantôme


    newCarre.addEventListener("click", function(){
        if(newCarre.classList.contains("clicked")){
            return;
        } else {
            newCarre.classList.add("clicked");
        }
        
        //Un symbole sur deux 
        newCarre.innerText = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        console.log(currentPlayer)

        var resultat = checkWin();
        console.log(resultat);
        if (resultat){
            squares.forEach((square) => {
              square.classList.add("gagné");
            });
            console.log(checkWin);
          }
        });
    }

//--------Création bouton---------------------------------//
const button = document.createElement("button");
button.innerText = "Rejouer";
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

function checkWin() {

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  //verticales
    [0, 4, 8], [2, 4, 6],           //diagonales
  ];
  
  for (let i = 0; i < 9; i++) {
    // const combinations = winningCombinations[i];
      if(winningCombinations[i] ===  [0, 1, 2]){
    // const a = squares[winningCombinations[0]];
    // const b = squares[winningCombinations[1]];
    // const c = squares[winningCombinations[2]];
    // const d = squares[winningCombinations[3]];
    // const e = squares[winningCombinations[4]];
    // const f = squares[winningCombinations[5]];
    // const g = squares[winningCombinations[6]];
    // const h = squares[winningCombinations[7]];

    // if (a !== ""|| b !== "" || c !== "" || d !==" " || e !=="" || f !=="" || g !=="" || h !=="" || i !=="") {
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
      document.getElementById("winningMessageText").innerText = `Partie terminée. ${winner} gagne !`;
      document.querySelectorAll(".carre").forEach(square => square.removeEventListener("click", handleClick));
    } else if (isDraw()) {

      // Afficher match nul
      document.getElementById("winningMessageText").innerText = "Partie terminée. Match nul!";
    } else {

      // Un message affiche le message "C'est au tour de X ou O"//
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      document.getElementById("turn-message") = `${currentPlayer}, à ton tour !`;
    }
  }
  //On ne pourra plus cliquer sur la case pour en changer la valeur une  fois  que  X  ou  O  y  est  placé//
  function handleClick(event) {
    const square = event.target;
    if (square.innerText === "") {
      square.innerText = currentPlayer;
      square.classList.add("clicked");
      square.removeEventListener("click", handleClick);
    }
  }
