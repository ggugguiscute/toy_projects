//1.요소의 선택
const imgs = document.querySelector(".imgs");
const img = document.querySelectorAll(".imgs img");
const slWrap = document.querySelector(".sl-wrap");
const navigators = document.querySelectorAll(".navigator a");
const dots = document.querySelectorAll(".dot");

//3.초기화 변수
let currentIdx = 0;
let timer = null;

//2.슬라이드 실행 메인 함수 정의
const startSlider = (eq) => {
  imgs.style.left = -100 * eq + "%";
  currentIdx = eq;

  //8.인디케이터 디자인 변경
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[currentIdx].classList.add("active");
};

//4. 일정 시간 간격으로 슬라이드 이동
const startTimer = () => {
  //setInterval을 멈추려면 clearInterval을 실행해야한다.
  //하지만 clearInterval의 파라미터로 setInterval 전체를 적용해야하므로 setInterval을 변수에 대입하여 전달한다.
  timer = setInterval(() => {
    const sliderLoopIdx = (currentIdx + 1) % img.length;
    //console.log(sliderLoopIdx);
    startSlider(sliderLoopIdx);
  }, 3000);
};

//5. 슬라이드 요소에 마우스 커서를 올렸을 때 기능 멈춤
const stopTimer = () => {
  clearInterval(timer);
};

//6. 마우스를 올렸을 때 기능이 멈추고, 마우스를 아웃했을 때 기능이 다시 실행
slWrap.addEventListener("mouseover", () => {
  stopTimer();
});
slWrap.addEventListener("mouseout", () => {
  startTimer();
});

//7.네비게이터 클릭했을 때 슬라이드 기능 실행
navigators.forEach((navigator) => {
  navigator.addEventListener("click", function () {
    //console.log(this);
    if (this.getAttribute("class") === "prev") {
      if (currentIdx === 0) {
        return false; //작동 멈춤
      } else {
        startSlider(currentIdx - 1);
      }
    } else {
      if (currentIdx === img.length - 1) {
        return false;
      } else {
        startSlider(currentIdx + 1);
      }
    }
  });
});

//9.dot를 클릭했을 때 해당 인덱스로 슬라이드 이동 (?)
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    startSlider(idx);
  });
});

startTimer();
