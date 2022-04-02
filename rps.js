var entirety;
var resizeNeeded = false;
var messageLog = "";

// This function is used to empty the contents of the game in case it detects the user is using a phone in portrait mode.
function emptyBox() {
  entirety = $("#outside-box").html();
  resizeNeeded = true;
  $("#outside-box").empty();
  $("#outside-box").html(
    "<h1>This game does not work in portrait mode! Please turn your phone over!</h1>"
  );
}

function addMessage(message) {
  messageLog = message + "\n" + messageLog;
  $("#main-text").val(messageLog);
}

$(document).ready(() => {
  if ($(window).width() < 420) {
    emptyBox();
  }
  addMessage(">Welcome to Rock Paper Scissors!");
  addMessage(">To begin, select your choice!");
});

$(".image").on("click", function () {
  addMessage("You chose " + $(this).attr("alt") + ".");
});

function rockPaperScissors(choice) {
  var compChoice = Math.floor(Math.random() * 3);
  switch (choice) {
    //   Player chose Rock
    case 0:
      switch (compChoice) {
        //   Tie
        case 0:
          break;
        //   Lose
        case 1:
          break;
        //   Win
        case 2:
          break;
        default:
          break;
      }
      break;
    //   Player chose paper
    case 1:
      switch (compChoice) {
        //   Win
        case 0:
          break;
        //   Tie
        case 1:
          break;
        //   Lose
        case 2:
          break;
        default:
          break;
      }
      break;
    //   Player chose scissors
    case 2:
      switch (compChoice) {
        //   Lose
        case 0:
          break;
        //   Win
        case 1:
          break;
        //   Tie
        case 2:
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

$(window).resize(function () {
  // timeout needed to delay check for window width
  setTimeout(() => {
    //   This if block empties the container if on mobile (portrait)
    //   Also is responsible for returning content when at correct width
    if (resizeNeeded === true && $(window).width() > 420) {
      $("#outside-box").html(entirety);
      resizeNeeded = false;
    } else {
      if ($(window).width() <= 420) {
        emptyBox();
      }
    }
  }, 50);
});
