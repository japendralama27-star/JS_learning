let product={
    name:'TShirt',
    price:789,
    rating:{
        stars:4.5,
        noOfReviews:423
    },
};
console.log(typeof product);
console.log(product);
let str=JSON.stringify(product);
console.log(typeof str);
console.log(str);

let newProduct=JSON.parse(str);
console.log(typeof newProduct);
console.log(newProduct);