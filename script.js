$(document).ready(function () {
    var screenHeight = $(window).height();
    console.log(screenHeight);
    $("body").css("height", screenHeight);
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".nav-bar-container-cls").show(); 
        } else {
            $(".nav-bar-container-cls").hide(); 
        }
    });
  
    $(".close-menu-cls").click(function () {
        $(".nav-bar-container-cls").css('right', '-100px');
        $(".nav-bar-container-cls").fadeOut(1);
        $(".menu-container-cls").show();
    });

    $(".menu-container-cls").click(function () {
        $(".nav-bar-container-cls").fadeIn(1);
        $(".nav-bar-container-cls").css('right', '0px');
    });
});

$(document).click(function (e) {
    if ($(window).width() <= 768) {
        if (!$(e.target).is('.nav-bar-container-cls') && !$(e.target).closest('.menu-container-cls').length) {
            $('.nav-bar-container-cls').css('right', '-100%');
            $(".nav-bar-container-cls").fadeOut(1);
        }
    }
});