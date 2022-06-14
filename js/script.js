// FASE 1:
// -- 1 -- chiedo il livello di diffoltà all'utente
// -- 2 --  Vedo che difficoltà ha selezionato l'utente 
// -- 3 --  Genero randomicamente le bombe in base al livello di difficoltà
// FASE 2
// -- 1 -- avvio il ciclo del gioco
// -- 2 -- controllo il numero dato dall'utente
//         -- 2.1 -- controllo il numero dato dall'utente e se è una bomba temino il gioco
//         -- 2.2 -- controllo il numero dato non è nell'array dei punti
//         -- 2.3 -- controllo se ha vinto e temino il gioco
// Variabili
const numberOfBombs = 16;
let gameMaxRange;

// -- 1 -- chiedo il livello di diffoltà all'utente
const difficultyLevel = prompt("Select Difficulty 1 2 3");

// -- 2 --  Vedo che difficoltà ha selezionato l'utente
switch(difficultyLevel) {
  case "2":
    gameMaxRange = 81;
    break;
  case "3":
    gameMaxRange = 49;
    break;
  default:
    gameMaxRange = 100;
    break;
}

// gli scrivo il livello di difficoltà selezionato
alert("you have select difficulty " + difficultyLevel);

const bombsLocation = bombsGeneretor(1, gameMaxRange, numberOfBombs);
console.log(bombsLocation);

// Game variables
const points = [];
let gameLoop = true;
const maxPoints =  gameMaxRange - numberOfBombs;

// -- 1 -- avvio il ciclo del gioco
while(gameLoop){

  // User interaction
  const userValue = parseInt(prompt("Dammi un numero"))

  // -- 2.1 -- controllo il numero dato dall'utente e se è una bomba temino il gioco
  if(bombsLocation.includes(userValue)){

    gameLoop = endGames('lost', points)
  } else {

    // -- 2.2 -- controllo il numero dato non è nell'array dei punti
    if(!points.includes(userValue) && isNaN(!userValue)){
      
      points.push(userValue)
      console.log(points)
    }

    // -- 2.3 -- controllo se ha vinto e temino il gioco
    if(points.length === maxPoints){
      
      gameLoop = endGames('win', points)
    }
  }
}

// -----------------------------------
//              FUNCTION 
// -----------------------------------

// Genera le bombe in posizioni randomiche tra un min e un massimo
function bombsGeneretor(minRange, maxRange, numberOfBombs) {
  
  // function variables
  const bombsArrey = [];
  let randomPosition;

  // popolo bombsArrey
  while(bombsArrey.length < numberOfBombs){
    randomPosition = getRndInteger(minRange, maxRange)

    // controlla se quel numero è stato già inserito in bombsArrey
    if(!bombsArrey.includes(randomPosition)){
      bombsArrey.push(randomPosition)
    }
  }

  return bombsArrey;
}

// Genera dei numeri rangom
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// chiude il gioco e da una risposta di vittoria o sconfitta
function endGames(value, points) {
  
  if(value === "lost"){
    
    alert("hai perso")
  } else {

    alert("hai vinto")
  }
  
  return false;
}