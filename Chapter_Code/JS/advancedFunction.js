let sum=function(num1,num2)
{ 
    return num1+num2;
};
let newSum=sum;

console.log(sum(4,5));
console.log(newSum(4,5));

console.log(sum);


let sum1=(num1,num2)=>{
    return num1+num2;
}
console.log(sum(6,8));


//we can write it -> let square=num=>num*num;

let square=(num)=>{
    return num*num;
}
console.log(square(6));