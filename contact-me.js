$(document).ready(function () {
    $('.nav-bar-container-cls ul li a').removeClass("active");
    $('.nav-bar-container-cls ul li:nth-child(4) a').addClass("active");

    $('.send-cls').click(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
    });
});