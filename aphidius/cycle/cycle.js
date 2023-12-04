$(document).ready(function(){

    $('.day1').removeClass('active');
    $('.day1').addClass('active');

    $('.h1').css('display', 'none');
    $('.h1').fadeIn(500);
    

    
    });


$(window).scroll(function() {
    if ($(this).scrollTop() >350) {
        $('.day1').removeClass('active');
    } else {
        $('.day1').addClass('active');
    }

    if ($(this).scrollTop() > 300 ) {
        $('.day2').addClass('active');
    } else {
        $('.day2').removeClass('active');
    }
    if ($(this).scrollTop() > 950 ) {
        $('.day2').removeClass('active');
    }



    if ($(this).scrollTop() > 900) {
        $('.day3').addClass('active');
    } else {
        $('.day3').removeClass('active');
    }
    if ($(this).scrollTop() > 2050 ) {
        $('.day3').removeClass('active');
    }


    if ($(this).scrollTop() > 2000) {
        $('.day4').addClass('active');
    } else {
        $('.day4').removeClass('active');
    }

    if ($(this).scrollTop() > 2850 ) {
        $('.day4').removeClass('active');
    }


    if ($(this).scrollTop() > 2800) {
        $('.day5').addClass('active');
    } else {
        $('.day5').removeClass('active');
    }

});  


    // if ($(this).scrollTop() > 1250 && $(this).scrollTop() < 250) {
    //     $('.day2').removeClass('active');
    // } else {
    //     $('.day2').addClass('active');
    // }


  





