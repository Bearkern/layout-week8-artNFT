$(function() {
  const swiper = new Swiper('.swiper-artist', {
    // Optional parameters
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-artist-pagination',
      clickable: true,
    },
    
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    }
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