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
            // attribut de balise
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

        const eleQuantity = document.getElementById("quantity");
        console.log(eleQuantity);
        
        const eleAdd = document.getElementById ("addToCart");
        console.log(eleAdd);
        

        eleAdd.addEventListener("click",()=>
        {
     
        var productQuantity = parseInt(document.getElementById("quantity").value);

        var productColor = document.querySelector("#colors").value;
            
        var eleInfo = {
            id  : idProduct ,
            color: productColor,
            quantity: productQuantity
            
            }
            console.log(eleInfo);

            if (!productColor || !productQuantity){
                alert("S'il vous plait saisissez une couleur ou une quantité avant d'ajouter au panier");
            }

            else {
                let productItems = JSON.parse(localStorage.getItem("eleInfo"));
                console.log(productItems);
                if (productItems != null){
                    
                    var ok = 0; 
                    // un test pour stoper 
                    

                    for (let index = 0; index < productItems.length; index++) {
                        const element = productItems[index];
                        console.log(element.id);
                        
                        if (eleInfo.id === element.id && eleInfo.color === element.color) {

                            element.quantity = element.quantity + eleInfo.quantity ;
                            localStorage.setItem("eleInfo", JSON.stringify(productItems));
                            console.log("A trouver meme couleur meme id")

                            ok = ok +1;
                            

                        }
                    }

                        if (ok === 0) {
                            productItems.push(eleInfo);
                            localStorage.setItem("eleInfo", JSON.stringify(productItems));
                            console.log("N'a pas trouver ni couleur ni Id")
                            
                        }
                        // va ajouter un nouvel element
                    
                    }
                        else {
                            productItems = [];
                            productItems.push(eleInfo);
                            localStorage.setItem("eleInfo", JSON.stringify(productItems));
                            console.log(productItems);
                        }
                    
                    }
                

        });

    });