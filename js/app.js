$(window).on('load', function(){


$(document).ready(function(){

  $('.parallax-window').parallax({imageSrc: './images/neuron.png'});


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
