var player1;
var player2;
var winsplayer1 = 0;
var winsplayer2 = 0;
var draws = 0;
var rounds = 0;

var f;

function player1errorcheck() {
  player1 = prompt("Enter the name of first Player");

  if (player1.length <= 0) {
    enternames();
  }
  if (player1 === null) {
    return;
  }
}
function player2errorcheck(params) {
  player2 = prompt("Enter the name of the second Player");
  if (player2.length <= 0) {
    player2errorcheck();
  }
  if (player2 === null) {
    return;
  }
}
function enternames() {
  player1errorcheck();
  player2errorcheck();
  var playerbox = document.createElement(playerbox);
  var playernames = document.createTextNode(player1 + " VS " + player2);
  playerbox.setAttribute("id", "enternames");
  playerbox.appendChild(playernames);
  document.getElementById("players").innerHTML = "";
  document.getElementById("players").appendChild(playerbox);
}
function namesreset() {
  document.getElementById("enternames").innerHTML =
    "Players' names will be shown here...";
}
function gameSimulator() {
  var options = ["Rock", "Paper", "Scissors"];
  var p2fire = options[Math.floor(Math.random() * options.length)];
  var p1fire = options[Math.floor(Math.random() * options.length)];

  console.log(p1fire + " vs " + p2fire);

  if (p2fire == "Paper" && p1fire == "Rock") {
    winsplayer2 += 1;
  } else if (p2fire == "Scissors" && p1fire == "Paper") {
    winsplayer2 += 1;
  } else if (p1fire == "Scissors" && p2fire == "Rock") {
    winsplayer2 += 1;
  } else if (p2fire == "Rock" && p1fire == "Paper") {
    winsplayer1 += 1;
  } else if (p1fire == "Rock" && p2fire == "Scissors") {
    winsplayer1 += 1;
  } else if (p1fire == "Scissors" && p2fire == "Paper") {
    winsplayer1++;
  } else if (p1fire == "Paper" && p2fire == "Paper") {
    draws++;
  } else if (p1fire == "Scissors" && p2fire == "Scissors") {
    draws++;
  } else if (p1fire == "Rock" && p2fire == "Rock") {
    draws++;
  }
  // console.log(winsplayer1);

  /* console.log(winsplayer1);
    console.log(winsplayer2);    
    console.log(draws);
*/
}
function agamelooper(rounds) {
  rounds;
  for (i = 0; i < rounds; i++) {
    gameSimulator();
  }
  if (winsplayer1 > winsplayer2) {
    f = document.createTextNode(player1 + " is the Final Winner!!!");
  } else if (winsplayer1 < winsplayer2) {
    f = document.createTextNode(player2 + " is the Final Winner!!!");
  } else {
    f = document.createTextNode("What a rare sight... It's a Draw!!!");
  }
  var r1 = document.createElement(r1);
  var r2 = document.createElement(r2);
  var r3 = document.createElement(r3);
  var r4 = document.createElement(r4);
  var p1 = document.createTextNode(
    player1 + " has won " + winsplayer1 + " rounds!!!"
  );
  var p2 = document.createTextNode(
    player2 + " has won " + winsplayer2 + " rounds!!!"
  );
  var d = document.createTextNode(draws + " Draws!!!");

  r1.setAttribute("id", "agamelooper1");
  r2.setAttribute("id", "agamelooper2");
  r3.setAttribute("id", "agamelooper3");
  r4.setAttribute("id", "agamelooper4");

  r1.appendChild(p1);
  document.getElementById("ap1").innerHTML = "";
  document.getElementById("ap1").appendChild(r1);

  r2.appendChild(p2);
  document.getElementById("ap2").innerHTML = "";
  document.getElementById("ap2").appendChild(r2);

  r3.appendChild(d);
  document.getElementById("ad").innerHTML = "";
  document.getElementById("ad").appendChild(r3);

  r4.appendChild(f);
  document.getElementById("af").innerHTML = "";
  document.getElementById("af").appendChild(r4);
}
function agamelooperreset() {
  winsplayer1 = 0;
  winsplayer2 = 0;
  draws = 0;
  document.getElementById("agamelooper1").innerHTML =
    "Wins of Player1 will be shown here";
  document.getElementById("agamelooper2").innerHTML =
    "Wins of Player2 will be shown here";
  document.getElementById("agamelooper3").innerHTML =
    "Number of draws will be shown here";
  document.getElementById("agamelooper4").innerHTML =
    "The Final WINNER will be shown here";
}
