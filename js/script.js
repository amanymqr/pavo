// $(window).scroll(function() {
//     let top = $(window).scrollTop();
//     if(top > 20) {
//         $('navbar').addClass('fixed');
//     }else {
//         $('navbar').removeClass('fixed');
//     }
// })

$(document).ready(function () {
    $('.counter').counterUp({
    delay: 10,
    time: 1200
    });
}); 


$(window).scroll(function() {
    let top = $(window).scrollTop();

    
    if (top > 300) {
        $('.top').fadeIn();
    }else {
        $('.top').fadeOut();
    }
})

$('.top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});