$('.menu-icon').on('click',function(){
    $('nav').toggleClass('main-nav');
    $('.menu-icon').toggleClass('menu-magic');
    $('body').toggleClass('body-perspective');
    $('.wrapper').toggleClass('wrapper-magic');
});