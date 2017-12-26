$(document).ready(() => {
    $("#fullname, #email, #yloc, #yquest").on("blur", function() {
        $(this).removeClass("highlight");
    }).on("focus", function() {
        $(this).addClass("highlight");
    });
});