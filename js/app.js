$(window).on('load', function(){
    $('#movmouse').stellar();

    $.stellar({
  // Set scrolling to be in either one or both directions
  horizontalScrolling: true,
  verticalScrolling: true,

  // Set the global alignment offsets
  horizontalOffset: 0,
  verticalOffset: 0,

  // Refreshes parallax content on window load and resize
  responsive: false,

  // Select which property is used to calculate scroll.
  // Choose 'scroll', 'position', 'margin' or 'transform',
  // or write your own 'scrollProperty' plugin.
  scrollProperty: 'scroll',

  // Select which property is used to position elements.
  // Choose between 'position' or 'transform',
  // or write your own 'positionProperty' plugin.
  positionProperty: 'position',

  // Enable or disable the two types of parallax
  parallaxBackgrounds: true,
  parallaxElements: true,

  // Hide parallax elements that move outside the viewport
  hideDistantElements: true,

  // Customise how elements are shown and hidden
  hideElement: function($elem) { $elem.hide(); },
  showElement: function($elem) { $elem.show(); }
});


  });


$(document).ready(function(){

  $('.parallax-window').parallax({imageSrc: './images/site.jpg'});


  var counter = 0;


  $('.button').click(function(){

    if(counter == 0){
      document.getElementById("alc1").style.display = "none";
      document.getElementById("alc12").style.display = "inline-block";

    }else if (counter == 1) {
      document.getElementById("alc2").style.display = "none";
      document.getElementById("alc22").style.display = "inline-block";
       document.getElementById("mice2").style.display = "block";
       $(".kid-mice").removeClass('active');
       document.getElementById("mice1").style.display = "none";
       document.getElementById("mice3").style.display = "none";
       document.getElementById("mice4").style.display = "none";

    }else if (counter == 2){
      document.getElementById("alc3").style.display = "none";
      document.getElementById("alc32").style.display = "inline-block";
       document.getElementById("mice3").style.display = "block";
       $(".kid-mice").removeClass('active');
       document.getElementById("mice1").style.display = "none";
       document.getElementById("mice2").style.display = "none";
       document.getElementById("mice4").style.display = "none";

    }else if (counter == 3){
      document.getElementById("alc4").style.display = "none";
      document.getElementById("alc41").style.display = "inline-block";
       document.getElementById("mice4").style.display = "block";
       $(".kid-mice").removeClass('active');
       document.getElementById("mice1").style.display = "none";
       document.getElementById("mice2").style.display = "none";
       document.getElementById("mice3").style.display = "none";

       document.getElementById("after-drink").style.display = "block";

    }else if(counter > 3){
      console.log(counter);

    }
    counter = counter + 1;


  });




});
