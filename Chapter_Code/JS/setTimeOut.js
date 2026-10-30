let alarm=function()
{
    console.log("Good Morning , my love...");
};
let timerId= setTimeout(alarm,2000);
console.log(`Alarm set with timerId: ${timerId}`);