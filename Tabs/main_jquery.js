$(function () {
  $(".btn").click(function () {
    $(".btn").removeClass("active");
    $(this).addClass("active");

    const idx = $(this).index();
    $(".panel").hide();
    $(".panel").eq(idx).show();
  });
});
