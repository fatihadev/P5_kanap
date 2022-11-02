const url = window.location.href; 
console.log(url);
const urlProduct = new URL (url); 
console.log(urlProduct);
const idProduct = urlProduct.searchParams.get("id"); 
console.log(idProduct);


const urlApi = "http://localhost:3000/api/products/";
fetch (urlApi)  
.then((res) => res.json())
.then((data) =>{
    console.log(data);
let infoProduct = data ;
console.log(infoProduct); 

let productItems = JSON.parse(localStorage.getItem("eleInfo"));
console.log(productItems);

for (let index = 0; index < productItems.length; index++) {
    const element = productItems[index];

}

productItems.forEach(element => console.log(element));

const productImg = document.getElementsByClassName("cart__item__img");
console.log(productImg);

const productQuantity= document.getElementsByClassName("cart__item__content__settings__quantity").value;
console.log(productQuantity);

    


})

