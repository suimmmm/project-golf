const cateBox = document.querySelector('#cate-box');
const item = document.querySelectorAll('#item');

// console.log(cateBox);

cateBox.addEventListener('click', event =>{
  // console.log(event.target);
  let cate = event.target.dataset.value;
  // console.log(cate);

  for(let i of item){
    let itemSplit = i.dataset.group.split(' ');
    // console.log(itemSplit);

    if(itemSplit.includes(cate) === true){
      i.classList.add('show');
      i.classList.remove('hide');
      console.log('?')
    }
    else{
      i.classList.add('hide');
      i.classList.remove('show');
      console.log('!')
    }
  }
})