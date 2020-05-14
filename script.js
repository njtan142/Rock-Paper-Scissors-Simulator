var player1;
var player2;
function player1errorcheck() {
     player1 = prompt("Enter the name of first Player");
  
    if(player1.length <= 0){
        enternames();
    }
    if( player1 === null ){
        return;
    }
}
function player2errorcheck(params) {
    player2 = prompt("Enter the name of the second Player")
    if(player2.length <= 0){
        player2errorcheck();
    }    
    if( player2 === null ){
        return;
    }
}
function enternames(){
    player1errorcheck();
    player2errorcheck();
    var playerbox = document.createElement(playerbox);
    var playernames = document.createTextNode(player1 + " VS " + player2);
    playerbox.setAttribute("id", "enternames");
    playerbox.appendChild(playernames);
    document.getElementById("players").innerHTML = "";
    document.getElementById("players").appendChild(playerbox);
    
}
function namesreset(){
    document.getElementById("enternames").innerHTML = "Players' names will be shown here...";
}