function isPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num %i===0)
        {
            return false;   
        }
    }
    return true;
}

let num=2;
let i=0;
while(i<10)
{
    if(isPrime(num))
    {
        console.log(num);
        i++;
    }
    num++;
} 