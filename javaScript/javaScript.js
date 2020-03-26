
var pcMove;
var choice= '';
var humanMove='';

var playerScore = document.getElementById("humanScore").innerHTML;
var machineScore = document.getElementById("machineScore").innerHTML;
var round = document.getElementById("round").innerHTML;


function computerPlay() {
  var movesArray = [
  'pizza',
  'pasta',
  'fandc'
  ]
  pcMove = movesArray[Math.floor(Math.random() * movesArray.length)];

  return pcMove;
}



function checkScore() {
  console.log("round " + round);
  console.log(playerScore + " P | M " + machineScore);
  if (round == 5) {

    if (playerScore > machineScore) {
      document.getElementById("round").innerHTML = round++;
      document.getElementById("toDelete").style.display = "none";
      document.getElementById("foodChoice").style.display = "none";
      
      var para = document.createElement("p");
      var node = document.createTextNode('Human is overall winner');
      para.appendChild(node);
      var element = document.getElementById("header");
      element.appendChild(para);


      var refresh = document.createElement("h3");
      var node = document.createTextNode('Do you really want to play again? Just refresh the page mate');
      refresh.appendChild(node);
      var element = document.getElementById("last");
      element.appendChild(refresh);
      
    } else if (machineScore > playerScore) {

      document.getElementById("round").innerHTML = round++;
      document.getElementById("toDelete").style.display = "none";
      document.getElementById("foodChoice").style.display = "none";
      var para = document.createElement("p");
      var node = document.createTextNode('Machine is overall winner');
      para.appendChild(node);
      var element = document.getElementById("header");
      element.appendChild(para);

      var refresh = document.createElement("p");
      // refresh.addRule('background-color: red');
      var node = document.createTextNode('Do you really want to play again? Just refresh the page mate');
      refresh.appendChild(node);
      var element = document.getElementById("last");
      element.appendChild(refresh);
   
    }
    if (machineScore == humanScore) {
      alert('It is a DRAWBag');
    }
  }
}




function playRound(humanSelection, pcSelection) {

  computerPlay();
  

  if (humanSelection == 'pasta' && pcMove == 'pasta') {

    document.getElementById("foodChoice").innerHTML = "It's a draw pal!!";
    checkScore();

  } else if (humanSelection == 'pasta' && pcMove == 'pizza') {
    machineScore++;
    document.getElementById("machineScore").innerHTML = machineScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": MACHINE WINS";
    round++;
    document.getElementById("round").innerHTML = round;


    checkScore();

  } else if (humanSelection == 'pasta' && pcMove == 'fandc') {

    playerScore++;
    document.getElementById("humanScore").innerHTML = playerScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": HUMAN WINS";
    round++;
    document.getElementById("round").innerHTML = round;
    checkScore();

  } else if (humanSelection == 'pizza' && pcMove == 'fandc') {
    playerScore++;
    document.getElementById("humanScore").innerHTML = playerScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": HUMAN WINS";
    round++;
    document.getElementById("round").innerHTML = round;
    checkScore();

  } else if (humanSelection == 'pizza' && pcMove == 'pizza') {

    document.getElementById("foodChoice").innerHTML = "It's a draw pal!!";
    checkScore();

  } else if (humanSelection == 'pizza' && pcMove == 'pasta') {
    machineScore++;
    document.getElementById("machineScore").innerHTML = machineScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": MACHINE WINS";
    round++;
    document.getElementById("round").innerHTML = round;
    checkScore();

  } else if (humanSelection == 'fandc' && pcMove == 'pizza') {
    machineScore++;
    document.getElementById("machineScore").innerHTML = machineScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": MACHINE WINS";
    round++;
    document.getElementById("round").innerHTML = round;
    checkScore();

  } else if (humanSelection == 'fandc' && pcMove == 'pasta') {
    playerScore++;
    document.getElementById("humanScore").innerHTML = playerScore;
    document.getElementById("foodChoice").innerHTML = "Machine chose " + pcMove + ": HUMAN WINS";
    round++;
    document.getElementById("round").innerHTML = round;
    checkScore();

  } else if (humanSelection == 'fandc' && pcMove == 'fandc') {

    document.getElementById("foodChoice").innerHTML = "It's a draw pal!!";
    checkScore();
  }

}

// function game() {

//   for (round; round < 6; round++) {
//     playRound(humanMove, pcMove);
//   }
// }

// game();
