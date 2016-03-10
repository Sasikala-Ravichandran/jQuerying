 $(function(){
  $("#play").click(function(){
    $("#slider").cycle('resume');
    return false;
  });
  $("#pause").click(function(){
    $("#slider").cycle('pause');
    return false;
  });
});