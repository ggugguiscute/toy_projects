const filterBtn = document.querySelectorAll(".filter-btn"); //반복요소 저장

const activeBtn = (e) => {
  //클릭하는 요소에 target 저장
  //console.log(e.target);
  const target = e.target;
  filterBtn.forEach((btn) => {
    //foreach로 target 다시 반복
    btn.classList.remove("active"); //반복문에 active 삭제
  });
  target.classList.add("active"); //그 외 클릭하였을 때 그 항목만 active 삽입
};

// filterBtn.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     filterBtn[idx].classList.add("active");
//   });
// });

filterBtn.forEach((btn) => {
  //각각 클릭하였을 때 activeBtn함수 적용
  btn.addEventListener("click", activeBtn);
});

console.log(filterBtn);
