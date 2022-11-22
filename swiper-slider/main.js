const swiper = new Swiper(".swiper", {
  // Optional parameters
  //direction: "vertical", //가로, 세로 슬라이드 이동 조정 옵션
  loop: true, //마지막 슬라이드 이후 첫 번째 슬라이드로 이동

  // If we need pagination // 인디케이터 표시 옵션
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //   // And if we need scrollbar //스크롤바가 보이는 옵션
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
