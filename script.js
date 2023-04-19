//-------Création des cases ------------------------------------//
const carre = document.createElement("div")
carre.classList.add("carre")

//-------Déclaration des joueurs ------------------------------//
const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let grille = [];

function startGame(){
  
  grille = []; //Initialisation des tables: essentielle pour y entrer des informations
  for(let i = 0; i < 9 ; i++){
    grille[i] = null;
  }
}

  for(let i = 1; i <= 9; i++){

    const newCarre = carre.cloneNode();
    newCarre.innerText = ""
    square.appendChild(newCarre) //square fantôme


  newCarre.addEventListener("click", function(){
    if(newCarre.classList.contains("clicked")){
    //On ne pourra plus cliquer sur la case pour en changer la valeur une  fois  que  X  ou  O  y  est  placé//
    return;
    } else {
      grille[i] = currentPlayer; //Mise à jour de la grille lorsqu'un joueur clique dessus ->prend sa valeur
      newCarre.classList.add("clicked");
    } 
    //Un symbole sur deux 
      newCarre.innerText = currentPlayer;

    checkWin();
    handleResultValidation();
    
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
  
  //Pour boucler dans winningcombinaisons puis dans les index et préciser victoire seulement si c'est le même joueur
  for (let i = 0; i < winningCombinations.length; i++) {

    let combination = winningCombinations[i];
    let victoire = true; //initialise la victoire sur vrai sur chaque combinaison

    for(let j = 0; j < combination.length; j++){
      if (grille[combination[j]] !== currentPlayer) {
      
        victoire = false;
        break; //sort de la boucle for dès que la combinaison est fausse pour optimiser le code
      }
    }
    //Si la combinaison est juste, victoire reste à true et retourne checkWin true
    if(victoire){
      return true;
    }
  }
  //Si aucune combinaison gagnante n'est trouvée, retourne checkWin false
  return false;
}
function isDraw() {
  const squares = document.querySelectorAll(".carre");
  return Array.from(squares).every(square => square.innerText !== '');
}

function handleResultValidation() {

  const winner = checkWin();
 
  // Afficher gagnant
    if (winner) {
      turnMessage.innerHTML = "Partie terminée ! "+ currentPlayer +" remporte la partie.";

  // Afficher match nul
    } else if (isDraw()) { //si la grille n'inclut pas de cases vides et quil n'y pas de victoire alors match nul
      turnMessage.innerHTML = "Partie terminée. Match nul!";

  // Un message affiche le message "C'est au tour de X ou O"//
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      turnMessage.innerHTML = "Joueur " + currentPlayer + ", à ton tour !";
    }
}