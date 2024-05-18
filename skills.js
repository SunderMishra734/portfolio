$(document).ready(function () {
    $('.nav-bar-container-cls ul li a').removeClass("active");
    $('.nav-bar-container-cls ul li:nth-child(3) a').addClass("active");

    $(".download-resume-cls").click(function () {
        var pdfUrl = "Images/resume.pdf";
        var link = $("<a>");
        link.attr("href", pdfUrl);
        link.attr("download", "sunder_resume.pdf");
        $("body").append(link);
        link[0].click();
        link.remove();
    });
});