// Slider
$(".mainSlider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$(".product__imgList").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// Branch opening/closing
$(".header__location, #modalLocation").on("click", () => {
  $(".header__branch").addClass("open");
  $(".header__branch").css("display", "flex");
});

$(document).on("mouseup", function (e) {
  var container = $(".header__branch.open");

  // if the target of the click isn't the container nor a descendant of the container
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    container.hide();
  }
});

// Category list opening/closing
$(".nav__item.category, .nav__modal").on("hover", () => {
  $(".nav__modal").addClass("open");
  $(".nav__modal").css("display", "block");
  $(".nav__item.category").css({
    color: "#FF7A00",
    background: "#fff",
  });
});

$(".nav__item.category, .nav__modal").on("mouseleave", () => {
  $(".nav__modal").removeClass("open");
  $(".nav__modal").css("display", "none");
  $(".nav__item.category").css({
    color: "initial",
    background: "initial",
  });
});

// routes
$(".nav__item.category").on("click", () => {
  location.href = "categories.html";
});

$("#contacts").on("click", () => {
  location.href = "contactsPage.html";
});

$("#news").on("click", () => {
  location.href = "news.html";
});

$("#products").on("click", () => {
  location.href = "products.html";
});

// Burger menu opening/closing
$("#burger").on("click", () => {
  $("#headerModal").css({ left: "0" });
});

$("#openBurger").on("click", () => {
  $("#headerModal").css({ left: "-100%" });
});

$("#plus").on("click", () => {
  $("#extras").addClass("open");
  $("#plus").css({ display: "none" });
  $("#minus").css({ display: "block" });
});

$("#minus").on("click", () => {
  $("#extras").removeClass("open");
  $("#plus").css({ display: "block" });
  $("#minus").css({ display: "none" });
});

// Product Buttons slider
$("#productButtons").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
});

// Companies slider
$("#companiesMobile").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
});
