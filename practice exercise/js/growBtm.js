function doubleTheSize(){
    let buttonElement =document.querySelector('.btn-subscribe');
    buttonElement.classList.add('js-size-double');
}


 let buttonElement =document.querySelector('.btn-subscribe');
 buttonElement.addEventListener('click' , event=>
 {
    setTimeout(doubleTheSize,2000);
 }
 )