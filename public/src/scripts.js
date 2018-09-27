$(document).ready(function() {
    $("img").mouseover(function(){
      $("#overlay").fadeIn();
      $("#overlayp").fadeIn();
  });
    $("#overlayp").mouseout(function(){
      $("#overlay").fadeOut();
      $("#overlayp").fadeOut();
  });
  });