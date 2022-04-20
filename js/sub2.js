// 이미지 불러오기
let inputFile = document.getElementById('input-file');
let imgBox = document.getElementById('uploadimage-b');
let checkBox = document.getElementById('check-box');

inputFile.style.display = "none";
//https://velog.io/@minkyeong-ko/HTMLCSSJS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%A6%84-%EB%82%98%ED%83%80%EB%82%B4%EA%B8%B0-%ED%99%94%EB%A9%B4%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0
inputFile.addEventListener('load', e =>{
  let file = e.files[0]; // 선택된 파일 가져오기

  //이미지 source 가져오기
  imgBox.src = URL.createObjectURL(file);

  // imgBox.style.visibility = "hidden";
})

