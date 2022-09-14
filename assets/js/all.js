"use strict";

$(function () {
  var swiper = new Swiper('.swiper-artist', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-artist-pagination',
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 24
      }
    }
  });
  var searchBarOpener = document.getElementById("searchBarOpener");
  var searchBar = document.getElementById("searchBar");
  var searchBarCloser = document.getElementById("searchBarCloser");
  searchBarOpener.addEventListener('click', function () {
    searchBar.classList.remove("d-none");
  });
  searchBarCloser.addEventListener('click', function () {
    searchBar.classList.add("d-none");
  });
});
//# sourceMappingURL=all.js.map
