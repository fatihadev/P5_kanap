const url = window.location.href; 
console.log(url);
const urlApi = "http://localhost:3000/api/products/";
const urlProduct = new URL (url); 
console.log(urlProduct);
const idProduct = urlProduct.searchParams.get("id"); 
console.log(idProduct);


let productItems = JSON.parse(localStorage.getItem("eleInfo"));
console.log(productItems);

let order = {}; 
let orderProduct = [];
// let pour declarer variable order object et orderProduct tableau


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
  total ();
  priceTotal ();
   deleteCanap (index);
 

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

function deleteCanap (i) {

  const deleteItems = document.getElementsByClassName("cart__item__content__settings__delete");
  console.log(deleteItems);
  const input = deleteItems[i].closest(".cart__item__content__settings__delete");
  console.log(input);
  


  input.addEventListener('click', () => {

  
    productItems.splice(i, 1);
    input.closest("article").remove();

    for (let index = 0; index < productItems.length; index++) {
      console.log(productItems[index]);
      
    }
    // mettre a jour le locals avec le nouveau productItems 
    localStorage.setItem("eleInfo", JSON.stringify(productItems));

total ();
priceTotal ();


  });

}



// fonction pour calculer le prix total 

function priceTotal () {
let totalPrice = 0;
const calculPrice = document.getElementById ("totalPrice");


for (let index = 0; index < productItems.length; index++) {
console.log(productItems[index].quantity)
 
  fetch (urlApi + productItems[index].id)  
  .then((res) => res.json())
  .then((data) =>{
console.log(data.price);

  totalPrice += productItems[index].quantity * data.price;
  console.log(totalPrice);
  calculPrice.innerText=totalPrice;
  });
}


}

// // fonction pour calculer total quantity

function total () {

  let totalItems = document.getElementById ("totalQuantity");
  let totalQuantity = 0;
  
  for (let index = 0; index < productItems.length; index++) {
  console.log(productItems[index].quantity);

totalQuantity += parseInt(productItems[index].quantity);

totalItems.innerText=totalQuantity;


  // const price = document.getElementsByClassName ("price")[0].innerHTML;

}
}
// --------------------> prenom

const validFirstName = function (x) {
  let nameReg = new RegExp ('^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$')  ;
  let testFirstName = nameReg.test(x.value);

  // var name = document.getElementById("firstName");
  // console.log(name);



  if (testFirstName){
    console.log(testFirstName)
document.getElementById("firstNameErrorMsg").innerHTML = "";
 return (x);

  }

  else {
    document.getElementById("firstNameErrorMsg").innerHTML= "Le prénom n'est pas valide "
  }


}
let formFirstName = document.getElementById("firstName");
let verifName = "";

formFirstName.addEventListener("change",(e) => {

  verifName = validFirstName (e.target.value);
  console.log(validFirstName(e.target.value));

});






// --------------------> nom de famille

const validLastName = function (x) {
  let lastNameReg = new RegExp ('^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$')  ;
  let testLastName = lastNameReg.test(x.value);

  if (testLastName){
    console.log(testLastName)
document.getElementById("lastNameErrorMsg").innerHTML = "";
 return (x);

  }

  else {
    document.getElementById("lastNameErrorMsg").innerHTML= "Le nom n'est pas valide "
  }


}
let formLastName = document.getElementById("lastName");
let verifLastName = "";

formLastName.addEventListener("change",(e) => {

  verifLastName = validLastName (e.target.value);
  console.log(validLastName(e.target.value));

});


// --------------------> adresse

const validAdress = function (x) {
  let adressReg = new RegExp ('^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$')  ;
  let testAdress = adressReg .test(x.value);

  if (testAdress){
    console.log(testAdress)
document.getElementById("addressErrorMsg").innerHTML = "";
 return (x);

  }

  else {
    document.getElementById("addressErrorMsg").innerHTML= "L'adresse n'est pas valide "
  }


}
let formAdress = document.getElementById("address");
let verifAdress = "";

formAdress.addEventListener("change",(e) => {

  verifAdress = validAdress (e.target.value);
  console.log(validAdress(e.target.value));

});
// --------------------> ville


const validVille = function (x) {
  let villeReg = new RegExp ('^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$')  ;
  let testVille = villeReg .test(x.value);

  if (testVille){
    console.log(testVille)
document.getElementById("cityErrorMsg").innerHTML = "";
 return (x);

  }

  else {
    document.getElementById("cityErrorMsg").innerHTML= "La ville n'est pas valide "
  }


}
let formCity = document.getElementById("city");
let verifCity= "";

formCity.addEventListener("change",(e) => {

  verifCity = validVille (e.target.value);
  console.log(validVille(e.target.value));

});

// -----------------> mail

 const validMail = function (x) {
  let MailReg = new RegExp  ('^[a-zA-Z]+(?:(?:\\s+|-)[a-zA-Z]+)*$');
  let testMail = MailReg .test(x.value);

  if (testMail){
    console.log(testMail)
document.getElementById("emailErrorMsg").innerHTML = "";
 return (x);

  }

  else {
    document.getElementById("emailErrorMsg").innerHTML= "L'email n'est pas valide "
  }

}
let formMail = document.getElementById("email");
let verifMail = "";

formMail.addEventListener("change",(e) => {

  verifMail = validMail (e.target.value);
  console.log(validMail(e.target.value));

});
    



  const submit = document.getElementById ("order");
  console.log(submit);

  let contact = {
     
    firstName: firstName,
    lastName :lastName ,
    address : address ,
    city : city ,
    email : email 
  }

  let products = productItems;

for (let product of products) {
  product = {id:product.id, quantity:product.quantity, color:product.color};
  orderProduct.push(product.id)
}
console.log(orderProduct)


submit.addEventListener ("click", (e) => {
e.preventDefault();
firstName = verifName;
lastName = verifLastName;
address = verifAdress;
city = verifCity;
email = verifMail;

contact = {firstName, lastName, address, city, email};
console.log(contact)


order = {
  contact,
  products : orderProduct,
};
console.log(order);

// url order = 'http://localhost:3000/api/products/order'




fetch("http://localhost:3000/api/products/order" , {
  method: 'POST',
  headers: {
    Accept:"application/json",
    "Content-Type":"application/json",
  },
  body:JSON.stringify(order),
})
.then(res => res.json())
.then(data => {
console.log(data.orderId);
window.location.href=`./confirmation.html?orderId=${data.orderId}`;


})
.catch(err=>{
  console.log(err);
  alert("il y a un probleme")
});
});