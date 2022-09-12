$(function() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const searchBarOpener = document.getElementById("searchBarOpener");
  const searchBar = document.getElementById("searchBar");
  const searchBarCloser = document.getElementById("searchBarCloser");
  searchBarOpener.addEventListener('click', () => {
    searchBar.classList.remove("d-none");
  });
  searchBarCloser.addEventListener('click', () => {
    searchBar.classList.add("d-none");
  });
});