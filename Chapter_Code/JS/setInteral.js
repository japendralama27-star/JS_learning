let alarm=function()
{
    console.log("Good Morning , my love...");
};
let intervalid=setInterval(alarm,1000);
setTimeout(() =>clearInterval(intervalid),5000); 