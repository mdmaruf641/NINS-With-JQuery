$(function(){

    // ADD CLASS
    
    $(".bnnr-cng-btn").click(function(){
        $(".banner").toggleClass("banner2");
    });

    // HIDE & SHOW 

    $(".doctor-btn1") .click(function(){
        $(".doctor2, .doctor3") .hide();
        $(".doctor1") .show();
    });

    $(".doctor-btn2") .click(function(){
        $(".doctor1, .doctor3") .hide();
        $(".doctor2") .show();
    });

    $(".doctor-btn3") .click(function(){
        $(".doctor1, .doctor2, .doctor3") .show();
    });

    // SLIDE UP & DOWN 

    $(".slide-up-btn").click(function(){
        $(".slide").slideToggle(1000);
    });

    // FADE TOGGLE

    $(".fade").click(function(){
        $(".featured-img").fadeToggle(1000);
    });

});