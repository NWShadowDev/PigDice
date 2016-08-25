//business logic
function Player1 (initial, name) {
  this.balance = initial;
  this.name = name;
}

function Player2 (initial, name) {
  this.balance = initial;
  this.name = name;
}
// function isWinner(balance){
//   this.balance = 20;
// }

function isEmpty(value){
    return (value === undefined || value == null || value.length <= 0) ? true : false;
}

Player1.prototype.hold = function(amount) {
  this.balance += amount;
}

Player1.prototype.loseturn = function(amount) {
  this.balance -= amount;
}

Player1.prototype.winner = function(amount) {
  this.balance = 10;
}

Player2.prototype.hold = function(amount) {
  this.balance += amount;
}

Player2.prototype.loseturn = function(amount) {
  this.balance -= amount;
}

Player2.prototype.winner = function(amount) {
  this.balance = 10;
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
    if (player1Name == "") {
    alert("Please enter a name or be fed to the pigs!");
  }else {
  }
    if (player2Name == "") {
    alert("Please enter a name or be fed to the pigs!");
  }else {
    alert("Hello " + player1Name + "  " + "and " + player2Name + "!")
  }
    $("#balance").text(currentBalance1);
    $("#balance").text(currentBalance2);
    newPlayer1 = new Player1(currentBalance1, player1Name);
    newPlayer2 = new Player2(currentBalance2, player2Name);
    $("#player1Name").text(player1Name);
    $("#player2Name").text(player2Name);
  });
//Player 1 Roll//
  $("#roll1").click(function(event){
    // debugger;
  event.preventDefault();
  var inputtedRoll1 = Math.floor(Math.random() * 6);
   if (inputtedRoll1 <= 1) {
     newPlayer1.loseturn();
     currentBalance1 = 0;
     $("#firstbalance").text(currentBalance1);
     alert("Sorry, you lost your turn! Player 2, your turn!");
     document.getElementById("roll1").disabled = true;
     document.getElementById("roll2").disabled = false;
   }else{
     newPlayer1.hold(currentBalance1 += inputtedRoll1);
     alert("Player1 rolled:" + inputtedRoll1);
      $("#firstbalance").text(currentBalance1);
      document.getElementById("roll2").disabled = true;
      document.getElementById("roll1").disabled = false;
   }
   if(currentBalance1 >= 10) {
     newPlayer1.winner();
     alert("Player 1, you win! Player 2, the pigs will now eat you! >:D");
   }
  $("#p1diceroll").text(newPlayer1.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  });

  $("#skip1").click(function(event) {
    var inputtedRoll1 = Math.floor(Math.random() * 6);
    newPlayer1.hold(currentBalance1);
    if(inputtedRoll1 >= 2){
    alert("Player1 Holds. Player 2, Go!");
    $("#firstbalance").text(currentBalance1);
    document.getElementById("roll2").disabled = false;
    document.getElementById("roll1").disabled = true;
  }
    if(currentBalance1 >= 10) {
      newPlayer1.winner();
      alert("Player 1, you win! Player 2, the pigs will now eat you! >:D");
      document.getElementById("roll2").disabled = true;
      document.getElementById("roll1").disabled = true;
    }
  });

  //Player2//
  $("#roll2").click(function(event){
    // debugger;
  event.preventDefault();
  var inputtedRoll2 = Math.floor(Math.random() * 6);
   if (inputtedRoll2 <=1) {
     newPlayer2.loseturn();
     currentBalance2 = 0;
     $("#secondbalance").text(currentBalance2);
     alert("Sorry, you lost your turn! Player 1, your turn!");
     document.getElementById("roll2").disabled = true;
     document.getElementById("roll1").disabled = false;
   }else{
     newPlayer2.hold(currentBalance2 += inputtedRoll2);
     alert("Player2 rolled:" + inputtedRoll2);
      $("#secondbalance").text(currentBalance2);
      document.getElementById("roll1").disabled = true;
      document.getElementById("roll2").disabled = false;
   }
   if(currentBalance2 >= 10) {
     newPlayer2.winner();
     alert("Player 2, you win! Player 1, the pigs will now eat you! >:D");
   }
  $("#p2diceroll").text(newPlayer2.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  });

  $("#skip2").click(function(event){
    var inputtedRoll2 = Math.floor(Math.random() * 6);
    newPlayer2.hold(currentBalance2);
    alert("Player2 Holds. Player 1, Go!");
    $("#secondbalance").text(currentBalance2);
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll1").disabled = false;
    if(currentBalance2 >= 10) {
      newPlayer2.winner();
      alert("Player 2, you win! Player 1, the pigs will now eat you! >:D");
      document.getElementById("roll2").disabled = true;
      document.getElementById("roll1").disabled = true;
    }
  });
});
