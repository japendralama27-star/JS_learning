let noOfTimeClicked=localStorage.getItem('noOfTimesClicked') || 0;
function buttonPressed()
{
    noOfTimeClicked++;
    localStorage.setItem('noOfTimesClicked',noOfTimeClicked);
    updateButton();
}
function updateButton()
{
    let button=document.querySelector('#my-button');
    if(noOfTimeClicked%2 ===0)
    {
        button.classList.remove('js-odd');
        button.classList.add('js-even');
    }else{
        button.classList.remove('js-even');
        button.classList.add('js-odd');
    }
    button.innerText=noOfTimeClicked;
}
updateButton();
function doGreeting(personName)
{
    let date=new Date();
    let hours=date.getHours();
    let heading=document.querySelector('#greeting');
    if(hours>5 && hours < 12)
    {
        heading.innerText`Good Morning ${personName}`;
    }
    else if(hours>12 && hours<18)
    {
        heading.innerText=`Good After Noon ${personName}`;
    }
    else{
        heading.innerText =`Good Night ${personName}`;
    }
}
doGreeting('James Rumba');