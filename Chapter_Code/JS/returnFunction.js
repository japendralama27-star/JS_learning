// function generateRandomMove()
// {
//     let random=Math.random();
//     let randomMove=random *3;
//     return randomMove;
// }
// console.log(generateRandomMove());
function determineDriveStatus()
{
    let age =21;
    let status;
    if (age>18)
    {
        return 'you can drive';
    }
    else{
        return 'use a bicycle';
    }

    console.log(determineDriveStatus());
}