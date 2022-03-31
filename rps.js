var entirety;
var resizeNeeded = false;

function emptyBox() {
  entirety = $("#outside-box").html();
  resizeNeeded = true;
  $("#outside-box").empty();
  $("#outside-box").html(
    "<h1>This game does not work in portrait mode! Please turn your phone over!</h1>"
  );
}

$(document).ready(() => {
  if ($(window).width() < 420) {
    emptyBox();
  }

  $("#main-text").append("Welcome to Rock Paper Scissors!");
  $("#main-text").append("Welcome to Rock Paper Scissors!2");
});

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
