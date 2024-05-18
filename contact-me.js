$(document).ready(function () {
    $('.nav-bar-container-cls ul li a').removeClass("active");
    $('.nav-bar-container-cls ul li:nth-child(4) a').addClass("active");

    $('.send-cls').click(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        if (name == "" && email == "" && message == "") {
            alert("Enter Information");
        }
        else {
            if (name == "" && email != "" && message != "") {
                alert("Please Enter Name")
            }
            else if (email == "" && name != "" && message != "") {
                alert("Please Enter Email")
            }
            else if (!ValidateEmail(email) && name == "" && message == "" && email != "" || !ValidateEmail(email) && name != "" && message != "") {
                alert("Please enter a valid email address.");
            }
            else if (message == "" && name != "" && email != "") {
                alert("Please give some message.");
            }
            else if (name != "" && email == "" && message == "") {
                alert("Please enter email and message");
            }
            else if (name == "" && email != "" && ValidateEmail(email) && message == "") {
                alert("Please enter name and message");
            }
            else if (name != "" && email != "" && ValidateEmail(email) && message != "") {
                alert("your message send successfully...");
            }
        }
    });

    function ValidateEmail(email) {
        var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            return false;
        }
        return true;
    }
});