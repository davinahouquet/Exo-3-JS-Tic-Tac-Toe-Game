//-------Création des cases -----------------------------------------
const carre = document.createElement("div")
carre.classList.add("carre")

const square = document.querySelector("#square")

const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

const squares = document.querySelectorAll(".carre");

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
        newCarre.innerText = currentPlayer;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    })
}

//--------Combinaisons gagnantes---------------------------------

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//--------Récupération des données HTML---------------------------
const cellElements = document.querySelectorAll('[data-cell]')
const boardElements = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let player2_turn = false

//--------Pour commencer le jeu---------------------------
startGame()

restartButton.addEventListener('click', startGame)

function startGame(){
    player2_turn = false
    cellElements.forEach(cell => {
        cell.classList.remove(player1)
        cell.classList.remove(player2)
        cell.removeEventListener('click', handleCellClick)
        cell.addEventListener('click', handleCellClick, {once : true})
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function handleCellClick(e){
    const cell = e.target
    const currentClass = player2_turn ? player2 : player1
    placeMark(cell, currentClass)
        if(checkWin(currentClass)){
            endGame(false)
        } else if (isDraw()){
            endGame(true)
        } else {
            swapTurns()
            setBoardHoverClass()
        }
}

//--------Affichafge des issues possibles---------------------------
function endGame(draw){
    if(draw){
        winningMessageTextElement.innerText = "It's a draw!"
    } else {
        winningMessageTextElement.innerText = `Player ${player2_turn ? "O" : "X"} wins!`
    }
    winningMessageTextElement.classList.add('show')
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(player1) || cell.classList.contains(player2)
    })
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns(){
    player2_turn = !player2_turn
}

function setBoardHoverClass(){
    boardElements.classList.remove(player1)
    boardElements.classList.remove(player2)
    if(player2_turn){
        boardElements.classList.add(player2)
    } else {
        boardElements.classList.add(player1)
    }
}

//------ Vérification de victoires ---------------------------
function checkWin(currentClass){
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}