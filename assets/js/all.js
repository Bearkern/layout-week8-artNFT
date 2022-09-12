"use strict";

$(function () {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
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
