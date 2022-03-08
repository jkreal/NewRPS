var entirety;
var resizeNeeded = false;

function emptyBox() {
  entirety = $("#outside-box").html();
  resizeNeeded = true;
  $("#outside-box").empty();
}

$(document).ready(() => {
  $("#ties").append("content069");
  for (var i = 0; i < 12; ++i) {
    $("#chatlog").val(i + "//Hello Worlddd!!;\n" + $("#chatlog").val());
  }

  if ($(window).width() < 420) {
    emptyBox();
  }
});

$(window).resize(function () {
    // timeout needed to delay check for window width
  setTimeout(() => {
    //   This if block empties the container if on mobile (portrait)
    //   Also is responsible for returning content when at correct width
    if (resizeNeeded === true) {
      if ($(window).width() > 420) {
        $("#outside-box").html(entirety);
        resizeNeeded = false;
      }
    } else {
        if ($(window).width() <= 420) {
            emptyBox();
        }
    }
  }, 50);
});
