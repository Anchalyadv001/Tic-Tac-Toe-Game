/*
let turn='O';

let winner= [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const board_array= new Array(9).fill("E");
//  0.   1   2   3   4   5   6   7   8
// ["E","E","E","E","E","E","E","E","E"]

function checkwinner(){
   
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E"&&board_array[index0]===board_array[index1] && board_array[index1]===board_array[index2]);
        return 1;
    }
    return 0;


}

// print ho h


 const printer = (event) =>{
     console.log(event.target.id);

   
    const element= event.target;
    if(board_array[element.id]==="E"){
   if(turn==='O'){
    element.innerHTML="O";
    board_array[element.id]="O";
    
   if(checkwinner())
   {
    document.getElementById('winningMessage').innerHTML="winner is O";
     board.removeEventListener('click',printer);
   }
    turn="X";
   }
   else{
    element.innerHTML="X";
    board_array[element.id]="X";

    
   if(checkwinner())
   {
    document.getElementById('winningMessage').innerHTML="winner is X";
     board.removeEventListener('click',printer);
   }
    turn="O";
   }
}
}





// board.removeEventListener('click',printer);
const board= document.querySelector('.board');
board.addEventListener("click",printer)


*/
const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restartButton");
const winningMessage = document.getElementById("winningMessage");

let currentPlayer = "O";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(e) {
  const cellIndex = e.target.id;

  if (!gameActive || board[cellIndex] !== "") return;

  board[cellIndex] = currentPlayer;
  e.target.textContent = currentPlayer;

  checkWinner();

  currentPlayer = currentPlayer === "O" ? "X" : "O";
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winningMessage.textContent = `Winner is ${board[a]}`;
      gameActive = false;
      return;
    }
  }

  if (!board.includes("") && gameActive) {
    winningMessage.textContent = "It's a draw!";
    gameActive = false;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => (cell.textContent = ""));
  winningMessage.textContent = "";
  currentPlayer = "O";
  gameActive = true;
}

cells.forEach(cell => cell.addEventListener("click", handleCellClick));
restartButton.addEventListener("click", restartGame);
