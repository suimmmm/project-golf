let today = new Date();
// console.log(today) 요일 월 일 년 시간 한국 표준시
let date = new Date(); // today의 데이트를 세어주는 역할

// console.log(today.getFullYear(),today.getMonth()-1,today.getDate());
// 2022 2 26
// console.log(today.getFullYear(),today.getMonth()+1,today.getDate());
// 2022 4 26


function stackCal(){
  // 이번달 첫째날
  let firstMonth = new Date(today.getFullYear(),today.getMonth(),1);
  // 이번달 마지막날
  let lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
  
  let calendar = document.getElementById('calendar');
  let yearMonth = document.getElementById('yearMonth');

  yearMonth.innerHTML = `${today.getFullYear()}년 ${today.getMonth()+1}월`;

  // console.log(calendar.rows.length);
  while(calendar.rows.length > 2){
    // 열을 지워줌
    calendar.deleteRow(calendar.rows.length-1);
  }

  // 열 삽입
  let row = null;
  row = calendar.insertRow();
  //count 셀 갯수 세어주는 역할
  let cnt = 0;
  //1일이 시작되는 칸을 맞추어줌
  for(i=0; i<=firstMonth.getDay();i++){
    // 이번달의 day만큼 돌림
    let cell = row.insertCell(); // 열 한칸 만듬
    console.log(row.insertCell())
    cnt += 1;
    // console.log(cnt);
  }

  let oneColor = '<p style="color:#ff5555;">';
  let twoColor = '<p style="color:#87ceeb;">';

  // 달력출력
  for(i = 1; i<=lastDate.getDate();i++){
    cell = row.insertCell();
    cell.innerHTML = i;
    cnt += 1;
    // console.log(cnt);

    // 일요일
    if(cnt%7 === 1){
      cell.innerHTML = `${oneColor}${i}<p>`;
    }
    // 토요일
    if(cnt%7 === 0){
      cell.innerHTML = `${twoColor}${i}<p>`;
      row = calendar.insertRow();
    }

    // 오늘 날짜 색칠
    if(today.getFullYear() === date.getFullYear() && today.getMonth() === date.getMonth() && i === date.getDate()){
      cell.bgColor = '#faf58c';
    }
  }


}

stackCal();

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

prevBtn.addEventListener('click', function(){
  console.log('?');
  today = new Date(today.getFullYear(),today.getMonth()-1,today.getDate());
  stackCal();
});
nextBtn.addEventListener('click', function(){
  today = new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
  stackCal();
});
