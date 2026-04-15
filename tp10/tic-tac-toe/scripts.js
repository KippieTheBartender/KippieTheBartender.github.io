//Establishing initial variables.
let gen = document.getElementById("container div");
let Player = 1;

let currentTurn = "x";
let gameOver = false;

let clickbox = document.getElementById("box");

gen.onclick = function() {addMark()};

//And this is the function for marking the spaces and changing the turn count.
function addMark(Player) {
  if (Player == 1) {gen.style.color = "pink"; Player = 2;} 
 
  else {gen.style.color = "white"; Player = 1;}
};

// declare the board data for a game, using 3 arrays
// "-" indicates unmarked, "x" indicates an X mark, "o" indicates an O mark
let rowA = [ "x", "o", "x" ];
let rowB = [ "x", "x", "x" ];
let rowC = [ "-", "o", "o" ];


//THIS IS THE START OF THE CODE FROM THE FUNCTIONS/ARRAYS PROJECT

//This checks the game state for a winner using brute force if else
function checkGameboard (rowA, rowB, rowC) {
  //assume the game is a draw
  let resultValue = "d";
  
  //This section checks for horizontal wins
  if ((rowA[0] == rowA[1]) && (rowA[0] == rowA[2])) {
    
      //Sends a log to the console for error checking
      if (rowA[0] != "d") console.log("win found at Row A");
    
      //Check who actually won and return the value.
      if (rowA[0] == "x") resultValue = "x";
      else if (rowA[0] == "o") resultValue = "o";
  }
  
  else if ((rowB[0] == rowB[1]) && (rowB[0] == rowB[2])) {
    
      //Sends a log to the console for error checking
      if (rowB[0] != "d") console.log("win found at Row B");
    
      if (rowB[0] == "x") resultValue = "x";
      else if (rowB[0] == "o") resultValue = "o";
  }
  
  else if ((rowC[0] == rowC[1]) && (rowC[0] == rowC[2])) {
    
      //Sends a log to the console for error checking
      if (rowC[0] != "d") console.log("win found at Row C");
     
      if (rowC[0] == "x") resultValue = "x";
      else if (rowC[0] == "o") resultValue = "o";
  }
  
  
  
  //Now we're checking for column wins
  else if ((rowA[0] == rowB[0]) && (rowA[0] == rowC[0])) {
    
      //Sends a log to the console for error checking
      if (rowA[0] != "d") console.log("win found at Column A");
          
      if (rowA[0] == "x") resultValue = "x";
      else if (rowA[0] == "o") resultValue = "o";
  }
  
  else if ((rowA[1] == rowB[1]) && (rowA[1] == rowC[1])) {
      
      //Sends a log to the console for error checking
      if (rowA[0] != "d") console.log("win found at Column B");
    
      if (rowA[1] == "x") resultValue = "x";
      else if (rowA[1] == "o") resultValue = "o";
  }
  
  else if ((rowA[2] == rowB[2]) && (rowA[2] == rowC[2])) {
       
      //Sends a log to the console for error checking
      if (rowA[2] != "d") console.log("win found at Column C");
        
      if (rowA[2] == "x") resultValue = "x";
      else if (rowA[2] == "o") resultValue = "o";
  }
  
  
  
  //Now we're checking the diagonals
  else if ((rowA[0] == rowB[1]) && (rowA[0] == rowC[2])) {
      
      //Sends a log to the console for error checking
      if (rowA[0] != "d") console.log("win found at Diagonal TL -> BR");
         
      if (rowA[0] == "x") resultValue = "x";
      else if (rowA[0] == "o") resultValue = "o";
  }
  
  else if ((rowA[2] == rowB[1]) && (rowA[2] == rowC[0])) {
     
      //Sends a log to the console for error checking
      if (rowA[2] != "d") console.log("win found at Diagonal BL -> TR");
    
      if (rowA[2] == "x") resultValue = "x";
      else if (rowA[2] == "o") resultValue = "o";
  }
  
  //If the game state was stored as a matrix id have used some for loops but this seemed just as effective given the array storage.
  return resultValue;
}

//THIS IS THE END OF THE CODE FROM THE FUNCTIONS/ARRAYS PROJECT


// **********************************************
// ***** DO NOT EDIT THE CODE BELOW THIS LINE
// **********************************************


// get a handle on the DOM element to be updated with the outcome
let gameOutputMsg = document.querySelector("#gameResult span");


// call your function checkGameboard() with the 3 rows
let winState = checkGameboard(rowA, rowB, rowC);

// test the returned value of the function
if (winState == "x") { 
  gameOutputMsg.innerHTML = "X wins";
  
} else if (winState == "o") {
  gameOutputMsg.innerHTML = "O wins";
  
} else if (winState == "d") {
  gameOutputMsg.innerHTML = "draw";
  
} else {
  gameOutputMsg.innerHTML = "unknown";
}


// ADDING CODE FOR TP 10 HERE //


gen.onclick = function() {clickHandler()};

function clickHandler() {

  // make sure it's a valid (empty) space
  if ((this.innerHTML == "") && (!gameOver))

    {this.innerHTML = currentTurn;


       // update the array of rows with the player value
        if (this.id == "a1") rowA[0] = currentTurn;
        if (this.id == "a2") rowA[1] = currentTurn;
        if (this.id == "a3") rowA[2] = currentTurn;
        if (this.id == "b1") rowB[0] = currentTurn;
        if (this.id == "b2") rowB[1] = currentTurn;
        if (this.id == "b3") rowB[2] = currentTurn;
        if (this.id == "c1") rowC[0] = currentTurn;
        if (this.id == "c2") rowC[1] = currentTurn;
        if (this.id == "c3") rowC[2] = currentTurn;
    } 
 
  else {this.style.color = "pink";}
};