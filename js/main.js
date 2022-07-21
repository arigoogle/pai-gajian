jQuery(document).on('ready', function ($) {
    "use strict";


    /*--------------------------
        PUSH CONTENT OPEN COLOSE
    ---------------------------*/

    var $content = $('.right-details-content');
    $('.info-button').on('click', function () {
        $content.addClass('content-open');
        return false;
    });
    $('.push-content-close').on('click', function () {
        $content.removeClass('content-open');
    });

    var $contentContact = $('.left-contact-content');
    $('.contact-button').on('click', function () {
        $contentContact.addClass('content-open');
        return false;
    });
    $('.push-content-close').on('click', function () {
        $contentContact.removeClass('content-open');
    });
    $content.css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll'
    });
    $contentContact.css({
        'overflow-x': 'hidden',
        'overflow-y': 'scroll'
    });


    /*--------------------------
        SMOOTH SCROLL
    ----------------------------*/
    $(".right-details-content , .left-contact-content").niceScroll({
        cursorwidth: "0px"
    });


    /*-------------------------------
        COWNDOWN TIMER
    --------------------------------*/
    $('.clock-countdown').downCount({
        date: $('.site-config').attr('data-date'),
        offset: +10
    }, function () {
        //callback here if finished
        //alert('YES, done!');
    });


    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://devitfamily.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=8e9f692d44', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });


    /*------------------------------
        GALLEY POPUP
    -------------------------------*/
    $('.single-gallery a').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // just a hack that adds mfp-anim class to markup 
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        gallery: {
            enabled: true
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
});


// countdown
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "07/27/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
