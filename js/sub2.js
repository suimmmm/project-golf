// 이미지 불러오기
const changeImg = document.getElementById('change-img');
const imgBox = document.getElementById('img-box');
const fileBox = document.getElementById('file-box');
const fileInput = document.querySelector('input').files[0];
let fileBoxVisible = window.getComputedStyle(fileBox).visibility;
const img = document.querySelector('#img');

document.querySelector('input').addEventListener('change', function(){
  console.log('??')
  const reader = new FileReader();
})

fileBox.style.visibility = 'hidden';
fileBoxVisible = 'hidden';
// console.log(fileBoxVisible);

changeImg.addEventListener('click', event=>{
  console.log('?');
  fileBox.style.visibility = 'visible';
  fileBoxVisible = 'visible';
  console.log(fileBoxVisible);
})

fileBox.addEventListener('click',e =>{
  fileBox.style.visibility = 'hidden';
  fileBoxVisible = 'hidden';
});
