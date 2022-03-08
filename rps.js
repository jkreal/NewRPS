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
  setTimeout(() => {
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
