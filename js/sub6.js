let today = new Date();
// console.log(today) 요일 월 일 년 시간 한국 표준시
let date = new Date(); // today의 데이트를 세어주는 역할

console.log(today.getFullYear(),today.getMonth()-1,today.getDate());
// 2022 2 26
console.log(today.getFullYear(),today.getMonth()+1,today.getDate());
// 2022 4 26

function prev(){
  today = new Date(today.getFullYear(),today.getMonth()-1,today.getDate());
}
function next(){
  today = new Date(today.getFullYear(),today.getMonth()+1,today.getDate());
}

