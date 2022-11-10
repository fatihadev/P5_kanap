const url = window.location.href; 
console.log(url);
const urlApi = "http://localhost:3000/api/products/";
const urlProduct = new URL (url); 
console.log(urlProduct);
const idProduct = urlProduct.searchParams.get("id"); 
console.log(idProduct);


let productItems = JSON.parse(localStorage.getItem("eleInfo"));
console.log(productItems);


for (const product in productItems) {
  
fetch (urlApi + productItems[product].id)  
.then((res) => res.json())
.then((data) =>{
    console.log(data);
let infoProduct = data ;
console.log(infoProduct); 


productItems.forEach(element => console.log(element));

const sectionProduct = document.getElementById("cart__items");
console.log(sectionProduct);

sectionProduct.innerHTML += ` <article class="cart__item" data-id='${infoProduct.id}' data-color='${productItems[product].colors}'>
<div class="cart__item__img">
  <img src= '${infoProduct.imageUrl}' alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>${infoProduct.name}</h2>
    <p>${productItems[product].color}</p>
    <p>${infoProduct.price}€</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté :</p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${productItems[product].quantity}>
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article>`;


})



}


for (let index = 0; index < productItems.length; index++) {
 
 
  fetch (urlApi + productItems[index].id)  
  .then((res) => res.json())
  .then((data) =>{

  modifyQuantity(index);

  // appeler fonction totalQuantity & priceTotal & deleteItems

  // deleteCanap (index);
priceTotal (index);
  });

}


// fonction pour modifier la quantité.

function modifyQuantity (i) {
  
  const quantities = document.getElementsByClassName ("itemQuantity");
  const input = quantities[i].closest (".itemQuantity");
  console.log(input);

    input.addEventListener('change', () => {
    console.log(input.value);

    productItems[i].quantity=input.value;
    localStorage.setItem("eleInfo", JSON.stringify(productItems));

    });
  
}

// fonction pour supprimer le produit du panier.

// function deleteCanap (i) {

//   const deleteItems = document.getElementsByClassName ("cart__item__content__settings__delete");
//   console.log(deleteItems);
//   const input = deleteItems[i].closest(".cart__item__content__settings__delete");
//   console.log(input);
//   deleteItems[0];




//   input.removeEventListener('click', () => deleteItems(i));
  
//   localStorage.removeItem("eleInfo", JSON.stringify(productItems));

// }

// fonction pour calculer le prix total 

function priceTotal (quantity, price) {

const calculPrice = document.getElementById ("totalPrice");
console.log(calculPrice);
calculPrice.innerHTML = productItems.totalPrice;

for (let index = 0; index < productItems.length; index++) {
  const element = productItems[index];

  const totalPrice = quantity * price;
  console.log (totalPrice);
  
}

}
