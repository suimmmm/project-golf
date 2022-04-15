let menuBox = document.getElementById('menu-box');
let subBox = document.getElementById('sub-menu');

let subBoxBlock = window.getComputedStyle(subBox).display;
// console.log(subBoxBlock);

menuBox.addEventListener('click', event =>{
    // console.log(menuBox, subBox);
    if(subBoxBlock == 'none'){
        subBoxBlock = 'block';
        subBox.style.display = 'block';
        // console.log(subBoxBlock);
    }
    else if(subBoxBlock == 'block'){
        subBoxBlock = 'none';
        subBox.style.display = 'none';
        // console.log(subBoxBlock);
    }
})