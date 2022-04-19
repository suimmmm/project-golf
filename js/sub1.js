const nameValue = document.getElementById('name');
const checkBox = document.getElementById('check-box');

console.dir(nameValue);
console.log(checkBox);

checkBox.addEventListener('click', event =>{

  nameValue.value ="";
})