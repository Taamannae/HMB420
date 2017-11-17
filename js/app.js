
$(document).ready(function(){
    $('#alc1').click(function(){
     document.getElementById("alc1").style.display = "none";
     document.getElementById("alc12").style.display = "inline-block";
    });

    $('#alc2').click(function(){
     document.getElementById("alc2").style.display = "none";
     document.getElementById("alc22").style.display = "inline-block";
      document.getElementById("mice2").style.display = "block";
      $(".kid-mice").removeClass('active');
      document.getElementById("mice1").style.display = "none";
      document.getElementById("mice3").style.display = "none";
      document.getElementById("mice4").style.display = "none";


    });

    $('#alc3').click(function(){
     document.getElementById("alc3").style.display = "none";
     document.getElementById("alc32").style.display = "inline-block";
      document.getElementById("mice3").style.display = "block";
      $(".kid-mice").removeClass('active');
      document.getElementById("mice1").style.display = "none";
      document.getElementById("mice2").style.display = "none";
      document.getElementById("mice4").style.display = "none";

    });

    $('#alc4').click(function(){
     document.getElementById("alc4").style.display = "none";
     document.getElementById("alc41").style.display = "inline-block";
      document.getElementById("mice4").style.display = "block";
      $(".kid-mice").removeClass('active');
      document.getElementById("mice1").style.display = "none";
      document.getElementById("mice2").style.display = "none";
      document.getElementById("mice3").style.display = "none";

    });


});
