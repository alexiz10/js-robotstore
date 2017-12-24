$(document).ready(() => {
    $("#fullname, #email, #yloc, #yquest").on("blur", () => {
        $(this).removeClass("highlight");
    }).on("focus", () => {
        $(this).addClass("highlight");
    });
});