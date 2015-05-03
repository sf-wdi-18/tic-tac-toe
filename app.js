
// it is necessay to declare these variables outside the
// event listener so that querySelector works properly
var board;
var squares;
var squareBorders;
var reset;
var turn = 'X';


window.addEventListener('load', function (){

  // Grab all the necessary elements
  board = document.querySelector('body');
  squares = document.querySelectorAll('.square p');
  squareBorders = document.querySelectorAll('.square');
  reset = document.querySelector('.reset');


  // Listen for clicks on squares
  // Track variable 'turn' for next move and end of game
  // Disallow repeated moves on the same square
  // Disallow moves after the game has been won
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function(event) {
      if (squareEmpty(event.target)) {
        setSquare(event.target);
      }
      else if (turn === 'game_over') {
        alert("The game is over!  Click 'reset' to play again.");
      }
      else {
        alert('That square has already been played!');
      }
    });
  }

});

function setSquare(square) {
  square.innerHTML = turn;  // turn = X or O
  square.setAttribute('class', turn);
  turn === 'X' ? turn = 'O' : turn = 'X';
}

function squareEmpty(square) {
  return square.innerHTML === '';
}


// original work below




// // If a winning combo is found, the combo is passed to win().
// // Color borders of the winning squares.
// function win(winning_squares) {
//   switch (winning_squares) {
//     case "012":
//       squareBorders[0].style.borderColor = "yellow";
//       squareBorders[1].style.borderColor = "yellow";
//       squareBorders[2].style.borderColor = "yellow";
//       break;
//     case "345":
//       squareBorders[3].style.borderColor = "yellow";
//       squareBorders[4].style.borderColor = "yellow";
//       squareBorders[5].style.borderColor = "yellow";
//       break;
//     case "678":
//       squareBorders[6].style.borderColor = "yellow";
//       squareBorders[7].style.borderColor = "yellow";
//       squareBorders[8].style.borderColor = "yellow";
//       break;
//     case "036":
//       squareBorders[0].style.borderColor = "yellow";
//       squareBorders[3].style.borderColor = "yellow";
//       squareBorders[6].style.borderColor = "yellow";
//       break;
//     case "147":
//       squareBorders[1].style.borderColor = "yellow";
//       squareBorders[4].style.borderColor = "yellow";
//       squareBorders[7].style.borderColor = "yellow";
//       break;
//     case "258":
//       squareBorders[2].style.borderColor = "yellow";
//       squareBorders[5].style.borderColor = "yellow";
//       squareBorders[8].style.borderColor = "yellow";
//       break;
//     case "048":
//       squareBorders[0].style.borderColor = "yellow";
//       squareBorders[4].style.borderColor = "yellow";
//       squareBorders[8].style.borderColor = "yellow";
//       break;
//     case "246":
//       squareBorders[2].style.borderColor = "yellow";
//       squareBorders[4].style.borderColor = "yellow";
//       squareBorders[6].style.borderColor = "yellow";
//       break;
//     default:
//       break;
//   }
// }

// // Reset button - clear squares and reset CSS class
// reset.addEventListener("click", function() {
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].innerHTML = "";
//     squares[i].setAttribute("class", "markNone");
//     squareBorders[i].style.borderColor = "black";
//     turn = "X";
//   }
// });

// // Listen for a click anywhere on the board.
// // Check for a winning combo of squares.
// board.addEventListener("click", function() {
//   if (squares[0].innerHTML == "X"
//       && squares[1].innerHTML == "X"
//       && squares[2].innerHTML == "X") {
//     win("012");
//     turn = "over";
//   }
//   else if (squares[3].innerHTML == "X"
//       && squares[4].innerHTML == "X"
//       && squares[5].innerHTML == "X") {
//     win("345");
//     turn = "over";
//   }
//   else if (squares[6].innerHTML == "X"
//       && squares[7].innerHTML == "X"
//       && squares[8].innerHTML == "X") {
//     win("678");
//     turn = "over";
//   }
//   else if (squares[0].innerHTML == "X"
//       && squares[3].innerHTML == "X"
//       && squares[6].innerHTML == "X") {
//     win("036");
//     turn = "over";
//   }
//   else if (squares[1].innerHTML == "X"
//       && squares[4].innerHTML == "X"
//       && squares[7].innerHTML == "X") {
//     win("147");
//     turn = "over";
//   }
//   else if (squares[2].innerHTML == "X"
//       && squares[5].innerHTML == "X"
//       && squares[8].innerHTML == "X") {
//     win("258");
//     turn = "over";
//   }
//   else if (squares[0].innerHTML == "X"
//       && squares[4].innerHTML == "X"
//       && squares[8].innerHTML == "X") {
//     win("048");
//     turn = "over";
//   }
//   else if (squares[2].innerHTML == "X"
//       && squares[4].innerHTML == "X"
//       && squares[6].innerHTML == "X") {
//     win("246");
//     turn = "over";
//   }
//   else if (squares[0].innerHTML == "O"
//       && squares[1].innerHTML == "O"
//       && squares[2].innerHTML == "O") {
//     win("012");
//     turn = "over";
//   }
//   else if (squares[3].innerHTML == "O"
//       && squares[4].innerHTML == "O"
//       && squares[5].innerHTML == "O") {
//     win("345");
//     turn = "over";
//   }
//   else if (squares[6].innerHTML == "O"
//       && squares[7].innerHTML == "O"
//       && squares[8].innerHTML == "O") {
//     win("678");
//     turn = "over";
//   }
//   else if (squares[0].innerHTML == "O"
//       && squares[3].innerHTML == "O"
//       && squares[6].innerHTML == "O") {
//     win("036");
//     turn = "over";
//   }
//   else if (squares[1].innerHTML == "O"
//       && squares[4].innerHTML == "O"
//       && squares[7].innerHTML == "O") {
//     win("147");
//     turn = "over";
//   }
//   else if (squares[2].innerHTML == "O"
//       && squares[5].innerHTML == "O"
//       && squares[8].innerHTML == "O") {
//     win("258");
//     turn = "over";
//   }
//   else if (squares[0].innerHTML == "O"
//       && squares[4].innerHTML == "O"
//       && squares[8].innerHTML == "O") {
//     win("048");
//     turn = "over";
//   }
//   else if (squares[2].innerHTML == "O"
//       && squares[4].innerHTML == "O"
//       && squares[6].innerHTML == "O") {
//     win("246");
//     turn = "over";
//   }
// });

