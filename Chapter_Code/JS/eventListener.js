let buttonElement=document.querySelector('#my-button');
let behavior = event =>console.log('James is hero!!!')
buttonElement.addEventListener('click', behavior);

let printDate=event=>console.log(new Date());
buttonElement.addEventListener('click',printDate);

buttonElement.removeEventListener('click',behavior);