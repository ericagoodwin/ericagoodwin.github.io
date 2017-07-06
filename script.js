

$( document ).ready( function() {

  $(".menu").hide();

  $(".frontpic").click(function() {
    $(".frontpic").hide();
    $(".menu").show();
    $("h1").css("cursor","pointer");
  });

  $("h1").click(function() {
    $(".menu").hide();
    $(".frontpic").show();
    $("h1").css("cursor","text");
  })
});
