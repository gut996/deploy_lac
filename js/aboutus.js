
$(document).ready(function(){

    $('#about-us-sponsors').click(function(){
        $('.about-sponsors').fadeToggle(1000);
    })

    $('#about-sponsors-close').click(function(){
        $('.about-sponsors').fadeOut(1000);
    })

    $('.about-sponsors').length > 0 && $('#about-us-policies').click(function(){
        $('.about-sponsors').fadeOut(1000);
    })

    $('.about-sponsors').length > 0 && $('#about-us-payment').click(function(){
        $('.about-sponsors').fadeOut(1000);
    })
})

$(document).ready(function(){

    $('#about-us-policies').click(function(){
        $('.about-policies').fadeToggle(1000);
    })

    $('#about-policies-close').click(function(){
        $('.about-policies').fadeOut(1000);
    })

    $('.about-policies').length > 0 && $('#about-us-payment').click(function(){
        $('.about-policies').fadeOut(1000);
    })

    $('.about-policies').length > 0 && $('#about-us-sponsors').click(function(){
        $('.about-policies').fadeOut(1000);
    })
})

$(document).ready(function(){
    $('#about-us-payment').click(function(){
        $('.about-payment').fadeToggle(1000);
    })

    $('#about-payment-close').click(function(){
        $('.about-payment').fadeOut(1000);
    })

    $('.about-payment').length > 0 && $('#about-us-policies').click(function(){
        $('.about-payment').fadeOut(1000);
    })

    $('.about-payment').length > 0 && $('#about-us-sponsors').click(function(){
        $('.about-payment').fadeOut(1000);
    })
})

// jQuery('.about-container-description').click(function(){
//     location.href = jQuery(this).attr('data-url');
// });

// jQuery(function($){
//     $('.about-container-description').css('cursor', 'pointer');
//     $('.about-container-description').on('click', function(){
//         window.location.href = $(this).find('input').attr('src');
//     });
// });