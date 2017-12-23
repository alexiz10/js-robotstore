$(document).ready(() => {
    $("input, textarea, select").on("blur", function() {
        $(this).removeClass("highlight");
    }).on("focus", function() {
        $(this).addClass("highlight");
    })
});