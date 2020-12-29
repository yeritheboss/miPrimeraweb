//toggle menu/bar script

$(document).ready(function (){



    //funcion click menu
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


        })
});