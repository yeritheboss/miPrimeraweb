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
});