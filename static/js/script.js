$(document).ready(function () {
    //funcion sticky del navbar
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    //funcion click menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


    });



    //Typed animation
    var typed = new Typed(".texto", {
        strings: ["Java Programmer", "Ingeniero de comunicaciones",
            "Desarrollador web", "Data Scientist"
        ],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});