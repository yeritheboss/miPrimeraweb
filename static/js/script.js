$(document).ready(function (){
 //funcion sticky del navbar
    $(window).scroll(function (){
        if (this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        })

       //funcion click menu
      $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");


        })



        //Typed animation
        var typed= new Typed(".texto",{
        strings:["Java Programmer","Ingeniero de comunicaciones",
        "Desarrollador web", "Data Scientist"],
        typespeed:100,
        backspeed:60,
        loop:true
        });
        

});