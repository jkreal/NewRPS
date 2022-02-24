

$(document).ready(() => {
    $("#ties").append("content069");
    for(var i = 0; i < 12; ++i){
        $("#chatlog").val(i + "//Hello Worlddd!!;\n" + $("#chatlog").val())
    }
});