$(window).on('scroll', function () {
    const $nav = $('.nav');
    const scrollTop = $(this).scrollTop();

    if (scrollTop > 400) {
        if (!$nav.hasClass('sticky')) {
            $nav.addClass('sticky');
        }
    } else {
        if ($nav.hasClass('sticky')) {
            $nav.removeClass('sticky');
        }
    }
});
