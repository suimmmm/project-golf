// 상담
let nameValue = document.getElementById('name');
let checkBox = document.getElementById('check-box');
let selectBox = document.getElementById('select-box');
let is_check = false;

console.dir(nameValue);
console.log(checkBox);
console.dir(selectBox);
console.log(is_check);

checkBox.addEventListener('click', event =>{
  
  if(selectBox.checked == true){
    alert(nameValue.value + '님의 신청을 접수하였습니다.');
    is_check = true;
  }
  else if(selectBox.checked == false){
    alert('동의');
    is_check =false;
  }
  nameValue.value ="";
})

// 자리
