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

$(document).ready(function () {
  var currentBalance1 = 0;
  var currentBalance2 = 0;
  $("#play").click(function(event){
    event.preventDefault();

    var player1Name = $("#firstname").val();
    var player2Name = $("#secondname").val();
    $("#balance").text(currentBalance1);
    $("#balance").text(currentBalance2);
    newPlayer1 = new Player1(currentBalance1, player1Name);
    newPlayer2 = new Player2(currentBalance2, player2Name);
    $("#firstname").val("");
    $("#secondname").val("");
    alert("Hello " + player1Name + "  " + "and " + player2Name + "!")
  });

  $("#roll1").click(function(event){
  event.preventDefault();
  var inputtedRoll1 = Math.floor(Math.random() * 6);
   if (inputtedRoll1 === 1) {
     newPlayer1.loseturn();
     alert("Sorry, you lost your turn! Player 2, your turn!");
   }else if (inputtedRoll1 === 0) {
        alert("Sorry, you lost your turn! Player 2, your turn!");
  } else {
     newPlayer1.hold(currentBalance1 +=inputtedRoll1);
     $("#p1diceroll").text(inputtedRoll1);
     $("#firstbalance").text(currentBalance1);
   }
  $("#p1diceroll").text(newPlayer1.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  });

  //Player2//
  $("#roll2").click(function(event){
  event.preventDefault();
  var inputtedRoll2 = Math.floor(Math.random() * 6);
   if (inputtedRoll2 ===1) {
     newPlayer2.loseturn();
     alert("Sorry, you lost your turn! Player 1, your turn!");
   }else if (inputtedRoll2 === 0) {
     alert("Sorry, you lost your turn! Player 1, your turn!");
   }else {
     newPlayer2.hold(currentBalance2 += inputtedRoll2);//problem
     $("#p2diceroll").text(inputtedRoll2);
     $("#secondbalance").text(currentBalance2);
   }
  $("#p2diceroll").text(newPlayer2.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  });
});
