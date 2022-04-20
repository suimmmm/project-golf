//자리
let person = document.getElementById("person");
let dateTxt = document.getElementById('date-txt');
let sitTxt = document.getElementById('sit-txt');
let sitBtn = document.querySelector('#sit-box');
let checkBox = document.getElementById('check-box');

console.dir(person);
console.dir(dateTxt);
console.dir(sitTxt);

sitBtn.addEventListener('click', event =>{
  console.dir(event.target);
  let eventTarget = event.target.value;

  console.log(eventTarget);

  sitTxt.value = eventTarget;
})

checkBox.addEventListener('click', event =>{
  // console.log(person.value);
  // console.log(dateTxt.value);
  // console.log(sitTxt.value);

  if(dateTxt.value == ""){
    alert('날짜 입력바람');
  }
  else if(sitTxt.value == "undefined"){
    alert('자리 다시 선택해주세요');
  }
  else if(sitTxt.value == ""){
    alert('자리 선택해주세요');
  }
  else{
    alert(person.value +'명 ' + dateTxt.value + "에 " + sitTxt.value + '번 자리 예약되었습니다');
  }

})