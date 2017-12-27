$(document).ready(() => {
    /**
     * This will highligh contact form input for the user to
     * know what input box they are in.
     */
    $('#fullname, #email, #yloc, #yquest').on('blur', function() {
        $(this).removeClass('highlight');
    }).on('focus', function() {
        $(this).addClass('highlight');
    });
    /**
     * This will visually affect hardware and robots when the user
     * interacts with them using their mouse.
     */
    $('article, :checkbox, :radio').hover(function(){
        $(this).toggleClass('highlight');
    });
    /**
     * This will allow the user to serach the robots page and it will
     * hide and show robots according to the user's search.
     */
    $('.searchbox').keyup(function() {
        var text = $(this).val();

        $('article').parent().hide();

        $('article').each(function() {
            if ($(this).text().toLowerCase().indexOf("" + text + "") != -1) {
                $(this).parent().show();
            }
        });
    });
});