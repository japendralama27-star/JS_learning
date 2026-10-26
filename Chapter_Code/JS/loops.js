 let i=0;
// while Loop;
while(i<=10)
{
    console.log(i++);
}

//do-while loop;
do
{
   console.log(i);
   i++;
}
while(i<10);

//For loop;
for(i=0;i<10;i++)
{
    console.log(i);
}
let nums=[3,6,7,9,4]
let sum=0;
for(let i=0;i<nums.length;i++)
{
    sum+=nums[i];
}
console.log(`Sum of the array is ${sum}`);