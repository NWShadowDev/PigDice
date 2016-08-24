//business logic
function Player1 (initial, name) {
  this.balance = initial;
  this.name = name;
}

function Player2 (initial, name) {
  this.balance = initial;
  this.name = name;
}

Player1.prototype.hold = function(amount) {
  this.balance += amount;
}

Player1.prototype.loseturn = function(amount) {
  this.balance = 0;
}

Player2.prototype.hold = function(amount) {
  this.balance += amount;
}

Player2.prototype.loseturn = function(amount) {
  this.balance = 0;
}

//user interface logic
var newPlayer1;
var newPlayer2;
var Currentbalance = [];
$(document).ready(function () {
  $("#play").click(function(event){
    event.preventDefault();

    var Currentbalance = 0;
    var player1Name = $("#firstname").val();
    var player2Name = $("#secondname").val();
    $("#balance").text(Currentbalance);
    newPlayer1 = new Player1(Currentbalance, player1Name);
    newPlayer2 = new Player2(Currentbalance, player2Name);
    $("#firstname").val("");
    $("#secondname").val("");
    $("#firstbalance").val("");
    $("#secondbalance").val("");
    alert("Hello " + player1Name + "  " + "and " + player2Name + "!")
  });

  $("#roll1").click(function(event){
    debugger;
  event.preventDefault();
  var inputtedRoll1 = Math.floor(Math.random() * 6);
   if (inputtedRoll1 ===1) {
     newPlayer1.loseturn();
     alert("Sorry, you lost your turn!");
   }
   else {
     newPlayer1.hold(Currentbalance === inputtedRoll1);
     alert(inputtedRoll1);
   }
  $("#p1diceroll").text(newPlayer1.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  $("#firstbalance").val("");
  $("#secondbalance").val("");
  });
});
