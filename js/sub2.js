// 이미지 불러오기
const changeImg = document.getElementById('change-img');
const inputFile = document.getElementById('input-file');
const imgBox = document.getElementById('uploadimage');
const checkBox = document.getElementById('check-box');
const fileBox = document.getElementById('file-box');
let fileBoxVisible = window.getComputedStyle(fileBox).visibility;

// console.log(changeImg);
function load(input) {
  var file = input.file[0];
  imgBox.src= URL.createObjectURL(file);
}

fileBox.style.visibility = 'hidden';
fileBoxVisible = 'hidden';
// console.log(fileBoxVisible);


changeImg.addEventListener('click', event=>{
  if(fileBoxVisible === 'visible'){
    fileBox.style.visibility = 'hidden';
    fileBoxVisible = 'hidden';
    console.log(fileBoxVisible);
  }
  else if(fileBoxVisible === 'visible'){
    fileBox.style.visibility = 'hidden';
    fileBoxVisible = 'hidden';
    console.log(fileBoxVisible);
  }
})


