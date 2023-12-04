var tStart = 0 // Start transition 100px from top
  , tEnd = 700   // End at 500px
  , cStart = [255,255,255]  // Gold
  , cEnd = [0, 0, 0]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

$(document).ready(function(){
    $('.aboutWasp').removeClass('active');
    $('.aboutWasp').addClass('active');

    $('h1').removeClass('active');
    $('h1').addClass('active');

    $('button').removeClass('active');
    $('button').addClass('active');    

    $('.newImage').css('display', 'none');
    $('.newImage').fadeIn(1500);

    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
    


//POP UP: https://stackoverflow.com/questions/29145224/popup-not-closing-on-clicking-again?rq=4  

//WINGS
    $(".anatomyWings").click(function (e) {
            var $popup = $(".wingOnclick");
            if (!$popup.is(":visible")) {
                $popup.fadeIn(100);
            } else {
                $popup.fadeOut(100);
            }
            e.stopPropagation();
        });
        
        $(document).click(function () {
            var $popup = $(".wingOnclick");
            if ($popup.is(":visible")) {
                $popup.fadeOut(80);
            }
        });
        
        $(document).click(function (e) {
            e.stopPropagation();
    });

//ABDOMEN
$(".anatomyAbdomen").click(function (e) {
    var $popup = $(".abdomenOnclick");
    if (!$popup.is(":visible")) {
        $popup.fadeIn(100);
    } else {
        $popup.fadeOut(100);
    }
    e.stopPropagation();
});

$(document).click(function () {
    var $popup = $(".abdomenOnclick");
    if ($popup.is(":visible")) {
        $popup.fadeOut(80);
    }
});

$(document).click(function (e) {
    e.stopPropagation();
});


//LEGS
$(".anatomyLegs").click(function (e) {
    var $popup = $(".legsOnclick");
    if (!$popup.is(":visible")) {
        $popup.fadeIn(100);
    } else {
        $popup.fadeOut(100);
    }
    e.stopPropagation();
});

$(document).click(function () {
    var $popup = $(".legsOnclick");
    if ($popup.is(":visible")) {
        $popup.fadeOut(80);
    }
});

$(document).click(function (e) {
    e.stopPropagation();
});


//THORAX
$(".anatomyThorax").click(function (e) {
    var $popup = $(".thoraxOnclick");
    if (!$popup.is(":visible")) {
        $popup.fadeIn(100);
    } else {
        $popup.fadeOut(100);
    }
    e.stopPropagation();
});

$(document).click(function () {
    var $popup = $(".thoraxOnclick");
    if ($popup.is(":visible")) {
        $popup.fadeOut(80);
    }
});

$(document).click(function (e) {
    e.stopPropagation();
});

//HEAD
$(".anatomyHead").click(function (e) {
    var $popup = $(".headOnclick");
    if (!$popup.is(":visible")) {
        $popup.fadeIn(100);
    } else {
        $popup.fadeOut(100);
    }
    e.stopPropagation();
});

$(document).click(function () {
    var $popup = $(".headOnclick");
    if ($popup.is(":visible")) {
        $popup.fadeOut(80);
    }
});

$(document).click(function (e) {
    e.stopPropagation();
});

//ANTENNA
$(".anatomyAntenna").click(function (e) {
    var $popup = $(".antennaOnclick");
    if (!$popup.is(":visible")) {
        $popup.fadeIn(100);
    } else {
        $popup.fadeOut(100);
    }
    e.stopPropagation();
});

$(document).click(function () {
    var $popup = $(".antennaOnclick");
    if ($popup.is(":visible")) {
        $popup.fadeOut(80);
    }
});

$(document).click(function (e) {
    e.stopPropagation();
});



    
});
    
    

