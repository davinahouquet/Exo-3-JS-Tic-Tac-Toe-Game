//-------Création des cases ------------------------------------//
const carre = document.createElement("div")
carre.classList.add("carre")

//-------Déclaration des joueurs ------------------------------//
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

        var resultat = checkWin();
        console.log(resultat);
        if (resultat){
            squares.forEach((square) => {
              square.classList.add("gagne");
            });
            console.log(checkWin);
          }
          
          currentPlayer = currentPlayer === player2 ? player1 : player2;
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

//--------Vérifier victoire + combinaisons gagnantes--------//
function checkWin() {

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //verticales
    [0, 4, 8], [2, 4, 6],            //diagonales
  ];
    
  //Boucler dans winningcombinaisons puis dans les index et préciser victoire seulement si c'est le même joueur

  for (let i = 0; i < winningCombinations.length; i++) {

    let combination = winningCombinations[i];

    for(let j = 0; j < combination.length; j++){
      if(combination == currentPlayer){
        return true;
      } 
    }
  }
  
  return false;
} 
  

  //--------Vérifier si nul ---------------------------//
  function isDraw() {
    const squares = document.querySelectorAll(".carre");
    return Array.from(squares).every(square => square.innerText !== '');
  }
  
  const winningMessage = document.getElementById("winningMessage");
  
  function handleResultValidation() {

    const winner = checkWin(currentPlayer);
    
    // Afficher gagnant
    if (winner) {
      document.getElementById("winningMessageText").innerText = `Partie terminée. ${winner} gagne !`;
      document.querySelectorAll(".carre").forEach(square => square.removeEventListener("click", handleClick));
    } else if (isDraw()) {

      // Afficher match nul
      document.getElementById("winningMessageText").innerText = "Partie terminée. Match nul!";
    } else {

      // Un message affiche le message "C'est au tour de X ou O"//
      currentPlayer = currentPlayer === player2 ? player1 : player2;
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
