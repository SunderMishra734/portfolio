$(document).ready(function () {
    $('.nav-bar-container-cls ul li a').removeClass("active");
    $('.nav-bar-container-cls ul li:nth-child(1) a').addClass("active");

    $(".github-icon-cls").click(function () {
        window.open("https://github.com/SunderMishra734", "_blank");
    }); 

    $(".linkdin-icon-cls").click(function () {
        window.open("https://www.linkedin.com/in/sunder-mishra-217510211/", "_blank");
    }); 

    $('.nav-bar-container-cls ul li a').click(function () {
        $('.nav-bar-container-cls ul li a').removeClass("active");
        $(this).addClass("active");
    });
});