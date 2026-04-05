$(document).ready(function () {
    // Header Scrolled Effect
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // Smooth adjustment logic removed in favor of CSS min-height: 100dvh

    // Navigation Logic
    $(".menu-container-cls").click(function () {
        $(".nav-bar-container-cls").fadeIn(100).css('right', '0px');
    });

    $(".close-menu-cls").click(function () {
        $(".nav-bar-container-cls").css('right', '-100%').fadeOut(300);
    });

    // Close menu on link click (mobile)
    $(".nav-bar-container-cls nav ul li a").click(function () {
        if ($(window).width() <= 768) {
            $(".nav-bar-container-cls").css('right', '-100%').fadeOut(300);
        }
    });

    // Active State & Scroll Spy
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop();
        $('section').each(function () {
            var top = $(this).offset().top - 150;
            var bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos <= bottom) {
                var id = $(this).attr('id');
                $('.nav-bar-container-cls ul li a').removeClass('active');
                $('.nav-bar-container-cls ul li a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    // Social & Buttons Logic
    $(".ri-github-fill").click(function () {
        window.open("https://github.com/SunderMishra734", "_blank");
    });

    $(".ri-linkedin-box-fill").click(function () {
        window.open("https://www.linkedin.com/in/sunder-mishra-217510211/", "_blank");
    });

    $(".resume-btn-modern").click(function () {
        var pdfUrl = "portfolio/Images/Resume.pdf";
        var link = $("<a>").attr({
            href: pdfUrl,
            download: "Sunder_Resume.pdf"
        }).appendTo("body");
        link[0].click();
        link.remove();
    });

    // Form Submission Logic
    $('.send-btn').click(function (e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        $("#formSubmit").submit();
        alert("Your message was sent successfully!");
    });

    // Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active-reveal');
                // revealObserver.unobserve(entry.target); // Optional: repeat animation by commenting this
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
});
