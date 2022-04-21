const filterBox = document.querySelector('#filter-box');
const list = document.querySelectorAll('#list');

//  tag -> style, dataset -> [0:all, 1: ]
// contains( value ) -> true, false 
// 배열추가 push()

filterBox.addEventListener('click', event =>{
  // console.dir(event.target);

  let filter = event.target.dataset.value;
  // console.log(filter);

  for(var item of list){
    // console.dir(item.dataset.group);
    let itemSplit = item.dataset.group.split(' ');
    // console.log(itemSplit);

    if(itemSplit.includes(filter) === true){
      item.classList.add('show');
      item.classList.remove('hide');
    }
    else{
      item.classList.add('hide');
      item.classList.remove('show');
    }
  }
})