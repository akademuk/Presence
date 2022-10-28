$(".birger-button").on("click", function(){
  $(".birger-button").toggleClass("close-btn");
  $(".menu").toggleClass("open-menu");

  $(this).toggleClass('active');
  $(this).toggleClass('not-active');

  if ($('.body').hasClass('bodyActive')) {
    $(".body").removeClass("bodyActive");
  } else {
    $(".body").addClass("bodyActive");
  }
});
