//-------Création des cases -----------------------------------------//
const carre = document.createElement("div")
carre.classList.add("carre")

//-------Déclaration des joueurs ------------------------------------//
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

const turnMessage = document.createElement("p");
turnMessage.id = "turn-message";
turnMessage.innerText = `${currentPlayer}'s turn`;
document.querySelector(".score").appendChild(turnMessage);

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
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticales
    [0, 4, 8], [2, 4, 6] // diagonales
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const combo = winningCombinations[i];
    const a = squares[combo[0]].innerText;
    const b = squares[combo[1]].innerText;
    const c = squares[combo[2]].innerText;
    if (a !== "" && a === b && b === c) {
      winningMessageText.innerText = `${a} wins!`;
      return true;
    }
  }

  return false;
}
const winningMessage = document.getElementById("winningMessage");


  
  function handleResultValidation() {
    const winner = checkWin();
    if (winner) {

      // There's a winner
      document.getElementById('winningMessageText').innerText = `${winner} wins!`;
      document.querySelectorAll('.carre').forEach(square => square.removeEventListener('click', handleClick));
    } else if (isDraw()) {

      // It's a draw
      document.getElementById('winningMessageText').innerText = 'Draw!';
    } else {

      // Game is still in progress
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      document.getElementById('winningMessageText').innerText = `${currentPlayer}'s turn`;
    }
  }
  
  //--------Vérifier si nul ---------------------------//
  function isDraw() {
    const squares = document.querySelectorAll('.carre');
    return Array.from(squares).every(square => square.innerText !== '');
  }
  
  function handleClick(event) {
    const square = event.target;
    if (square.innerText === '') {
      square.innerText = currentPlayer;
      square.classList.add('clicked');
      square.removeEventListener('click', handleClick); // Remove the event listener
      handleResultValidation();
    }
  }
