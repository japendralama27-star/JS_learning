let product={
    name:'jeans',
    size:'s',
    fit:'slim fit',
    'delivery-tume':'same day delivery',
};
// let copyProduct=product;
// console.log(product);
// copyProduct.size='m';
// console.log(product);
// copyProduct.fit='Regular Fit';
// console.log(product);

console.log(product ['delivery-time']);

let obj ={
    message:'Good Job',
    status:'complete',
};
console.log(obj);
let {message,status}=obj;
console.log(message);
console.log(status);

function isIdenticalProduct(pro1,pro2)
{
     if(typeof pro1!=='object' || typeof pro2!== 'object')
    return false;

    if(pro1==pro2)
        return true;

    if(pro1.name===pro2.name && pro1.size===pro2.size && pro1.fit===pro2.fit)
        return true;
    else
        return false;
}

let product2={
    name:'jeans',
    size:'m',
    fit:'slim fit',
    'delivery-tume':'same day delivery',
};

let product3={
    name:'jeans',
    size:'m',
    fit:'slim fit',
    'delivery-tume':'same day delivery',
};

console.log(isIdenticalProduct(product,''))
console.log(isIdenticalProduct(product2,product3));
console.log(isIdenticalProduct(product,pro))