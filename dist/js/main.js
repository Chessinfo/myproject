$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 1500,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
