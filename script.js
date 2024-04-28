$(document).ready(function () {
    $(".nav-bar-container-cls").hide();
    $(".close-menu-cls").click(function () {
        $(".nav-bar-container-cls").css('right', '-100px');
        $(".nav-bar-container-cls").hide();
        $(".menu-container-cls").show();
    });

    $(".menu-container-cls").click(function () {
        $(".nav-bar-container-cls").show();
        $(".nav-bar-container-cls").css('right', '0px');
    });
});

$(document).click(function (e) {
    if (!$(e.target).is('.nav-bar-container-cls') && !$(e.target).closest('.menu-container-cls').length) {
        $('.nav-bar-container-cls').css('right', '-100%'); 
        $(".nav-bar-container-cls").hide();
    }
});