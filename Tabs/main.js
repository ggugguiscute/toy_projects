// 1. 버튼 요소 선택
// 2. 반복문으로 버튼 요소 추출
// 3. 버튼 클릭 시 전체 active 클래스 삭제
// 4. 각각의 버튼 클릭 시 active 클래스 추가

// 1번 과정
const btns = document.querySelectorAll(".btns .btn"); //querySelctorAll ; 항목이 여러 개일 때
const panels = document.querySelectorAll(".panels .panel");

// 4번 과정 : activeTabs 함수 정의
function activeTabs(idx) {
  //3번 과정에서 전달된 i 파라미터는 idx에 저장

  // 5번 과정 : 각각의 버튼을 반복문으로 추출하여 전체 요소의 active 클래스 제거
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.classList.remove("active"); //??????//
  }

  // 7번 과정 : 전체 패널을 반복문으로 각각 추출하여 display값을 none으로 변경(버튼 클릭 시 실행)
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none"; //,,,//
  }

  // 8번 과정 : 패널 3개 중 idx로 전달받은 패널의 요소에만 display값을 block으로 변경
  panels[idx].style.display = "block"; //?????..//

  // 6번 과정 : 전달받은 idx를 인덱스로 하는 버튼(클릭하는 대상)에만 active 클래스 추가
  btns[idx].classList.add("active"); ///??///
}

// 2번 과정 : 버튼 3개를 반복문으로 각각 추출한다.
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];

  // 3번 과정 : 각각 추출된 버튼 요소를 클릭했을 때 activeTabs 함수 실행
  btn.addEventListener("click", () => {
    activeTabs(i); //함수의 파라미터로 i 인덱스 전달. 예) 첫번째 탭 클릭 시 0 전달, 두번째 탭 클릭 시 1 전달 ,,.
  });
}
