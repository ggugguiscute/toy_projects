const filterBtn = document.querySelectorAll(".filter-btn"); //반복요소 저장
const filterImg = document.querySelectorAll(".filter-image");
const closeBtn = document.querySelector(".ri-close-line");
const lightBox = document.querySelector(".light-box");
const overlay = document.querySelector(".overlay");
const categoryTxt = document.querySelector(".title p");

//====================Tab and filtering Function
const activeBtn = (e) => {
  //클릭하는 요소에 target 저장
  const target = e.target;
  const selectedTabData = target.getAttribute("data-filter"); //탭에 있는 data-filter 속성값
  filterBtn.forEach((btn) => {
    //foreach로 target 다시 반복
    btn.classList.remove("active"); //반복문에 active 삭제
  });
  target.classList.add("active"); //그 외 클릭하였을 때 그 항목만 active 삽입

  filterImg.forEach((image) => {
    image.classList.add("hide");
    const selectedImgData = image.getAttribute("data-filter"); //이미지에 있는 data-filter 속성값

    setTimeout(() => {
      if (selectedTabData === selectedImgData || selectedTabData === "all") {
        image.classList.remove("hide");
        image.classList.add("show");
      } else {
        image.classList.add("hide");
        image.classList.remove("show");
      }
    }, 100);
  });
};

// filterBtn.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     filterBtn[idx].classList.add("active");
//   });
// });

//====================show light box Function
const showLightBox = (e) => {
  const target = e.currentTarget;
  const selectedImg = target.children[0].children[0].getAttribute("src");
  const categoryNm = target.getAttribute("data-filter");
  const lightBoxImg = document.querySelector(".light-box-img img");
  // const target = e.currentTarget;
  // target.classList.add("show");
  lightBox.classList.add("show");
  overlay.classList.add("show");
  lightBoxImg.setAttribute("src", selectedImg);
  categoryTxt.textContent = categoryNm;
};

filterImg.forEach((image) => {
  image.addEventListener("click", showLightBox);
});

filterBtn.forEach((btn) => {
  //각각 클릭하였을 때 activeBtn함수 적용
  btn.addEventListener("click", activeBtn);
});

closeLightBox = () => {
  lightBox.classList.remove("show");
  overlay.classList.remove("show");
};

closeBtn.addEventListener("click", closeLightBox);
overlay.addEventListener("click", closeLightBox);
