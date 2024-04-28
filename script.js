$(document).ready(function () {
    $(".close-menu-cls").click(function () {
        $(".nav-bar-container-cls").css('right', '-100%');
        $(".menu-container-cls").show();
    });

    $(".menu-container-cls").click(function () {
        $(".nav-bar-container-cls").css('right', '0px');
    });
});

$(document).click(function (e) {
    if (!$(e.target).is('.nav-bar-container-cls') && !$(e.target).closest('.menu-container-cls').length) {
        $('.nav-bar-container-cls').css('right', '-100%'); 
    }
});