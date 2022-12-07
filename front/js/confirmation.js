const url = window.location.href; 
console.log(url);
const urlApi = "http://localhost:3000/api/products/order";
const urlProduct = new URL (url); 
console.log(urlProduct);
const idProduct = urlProduct.searchParams.get("orderId"); 
// on recupere l'order id
console.log(idProduct);

let number = document.getElementById("orderId");
number.innerText= idProduct;
localStorage.clear();
// clear c'est pour effacer les données et en repasser une commande avec un autre utilisateur
