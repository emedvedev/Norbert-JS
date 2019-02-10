$(document).ready(function () {
    $('a[href^="#"]').click(function() {
        var target = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(target).offset().top-0
        }, 1000);
    });
});