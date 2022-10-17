
const url = window.location.href; 
console.log(url);
const urlProduct = new URL (url); 
console.log(urlProduct);
const idProduct = urlProduct.searchParams.get("id"); 
console.log(idProduct);

const urlApi = "http://localhost:3000/api/products/" +idProduct ;
fetch (urlApi)  
.then((res) => res.json())
.then((data) =>{
    console.log(data);
let infoProduct = data ;
console.log(infoProduct);

const eleImg = document.getElementsByClassName("item__img");
console.log(eleImg);

const newImg = document.createElement("img");
Object.assign(newImg, {
    src: infoProduct.imageUrl,
    alt: infoProduct.altTxt ,
})
console.log(newImg);
eleImg[0].appendChild(newImg);

const eleTitle = document.getElementById("title");
eleTitle.innerHTML=infoProduct.name;

const elePrice = document.getElementById("price");
elePrice.innerHTML = infoProduct.price;

const eleDesc = document.getElementById ("description");
eleDesc.innerHTML = infoProduct.description;

console.log(infoProduct.colors)

const eleColor = document.getElementById ("colors");
console.log(eleColor);

for (let color in infoProduct.colors ) {
    let eleOption = document.createElement ("option");
Object.assign(eleOption, {

    value: infoProduct.colors[color],
    innerText: infoProduct.colors[color],
}
    
    )
   
    document.getElementById ("colors").appendChild(eleOption);

    console.log(eleOption);
    
    }


});

