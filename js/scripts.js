//business logic
function Player1 (initial, name) {
  this.balance = initial;
  this.name = name;
}

function Player2 (initial, name) {
  this.balance = initial;
  this.name = name;
}

function isEmpty(value){
    return (value === undefined || value == null || value.length <= 0) ? true : false;
}

Player1.prototype.hold = function(amount) {
  this.balance += amount;
}

Player1.prototype.loseturn = function(amount) {
  this.balance -= amount;
}

Player2.prototype.hold = function(amount) {
  this.balance += amount;
}

Player2.prototype.loseturn = function(amount) {
  this.balance -= amount;
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

  $("#roll1").click(function(event){
  event.preventDefault();
  var inputtedRoll1 = Math.floor(Math.random() * 6);
   if (inputtedRoll1 === 1) {
     newPlayer1.loseturn();
     currentBalance1 = 0;
     $("#firstbalance").text(currentBalance1);
     alert("Sorry, you lost your turn! Player 2, your turn!");
     document.getElementById("roll1").disabled = true;
     document.getElementById("roll2").disabled = false;
   }else if (inputtedRoll1 === 0) {
      newPlayer1.loseturn();
        currentBalance1 = 0;
        $("#firstbalance").text(currentBalance1);
        alert("Sorry, you lost your turn! Player 2, your turn!");
        document.getElementById("roll1").disabled = true;
        document.getElementById("roll2").disabled = false;
  } else {
     newPlayer1.hold(currentBalance1 +=inputtedRoll1);
     alert("Player1 rolled: " + inputtedRoll1);
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
     currentBalance2 = 0;
     document.getElementById("roll2").disabled = true;
     document.getElementById("roll1").disabled = false;
     $("#secondbalance").text(currentBalance2);
     alert("Sorry, you lost your turn! Player 1, your turn!");
   }else if (inputtedRoll2 === 0) {
     newPlayer2.loseturn();
     currentBalance2 = 0;
     document.getElementById("roll2").disabled = true;
     document.getElementById("roll1").disabled = false;
     $("#secondbalance").text(currentBalance2);
     alert("Sorry, you lost your turn! Player 1, your turn!");
   }else {
     newPlayer2.hold(currentBalance2 += inputtedRoll2);
     alert("Player2 rolled: " + inputtedRoll2);
     $("#secondbalance").text(currentBalance2);
   }
  $("#p2diceroll").text(newPlayer2.balance);
  $("#firstname").val("");
  $("#secondname").val("");
  });
});
