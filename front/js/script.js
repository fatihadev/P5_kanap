const urlApi = "http://localhost:3000/api/products";
fetch (urlApi) 
.then((res) => res.json())
.then((data) =>{
    console.log(data);
 
    const products = data;
    const sectionProducts = document.getElementById ("items");
    console.log(sectionProducts);
    for (let product in products) { 

        const newA = document.createElement ("a");
        sectionProducts.appendChild(newA);
        Object.assign (newA, {href:"./product.html?"+ "id=" + products[product]._id})
        
    }
    lien();

    for (product in products){
        const newImg = document.createElement("img");
        Object.assign(newImg, {
            src:products[product].imageUrl,
            alt:products[product].altTxt,
        })
        var listArticle = document.getElementsByTagName("article");
        listArticle[product].appendChild(newImg);


        
    }

    for (product in products){

        const newTitle = document.createElement("h3");
        Object.assign(newTitle, {

            class:"productName",
            innerText:products[product].name,
           
        })
        var listArticle = document.getElementsByTagName("article");
        listArticle[product].appendChild(newTitle);

    }

    for (product in products) {
        const newP = document.createElement("p");
        Object.assign(newP, {

            class:"productDescription",
            innerText:products[product].description,
        })
        var listArticle = document.getElementsByTagName("article");
        listArticle[product].appendChild(newP);

    }

    function lien() {

        const filSection = document.querySelectorAll("#items > a");
        filSection.forEach((a) => {
            const newArticle = document.createElement ("article");
            a.appendChild(newArticle);
         
        
        });
       
    }
   
  
    

    // function card() {


    

    // for (let product in products) {
        
    //     Object.assign (newA, {href:"./product.html?"+products[product]._id})
    //     const newP = document.createElement("p");
    //     const newTitle = document.createElement("h3");
    //     const newImg = document.createElement ("img");
        
    //     var listArticle = document.getElementsByTagName("article");
    //     listArticle[product].appendChild(newImg);
    //     listArticle[product].appendChild(newTitle);
    //     listArticle[product].appendChild(newP);
        
        

    //     Object.assign(newImg, {
    //         src:products[product].imageUrl,
    //         alt:products[product].altTxt,
    //     })

    //     Object.assign(newP, {

    //         class:"productDescription",
    //         innerText:products[product].description,
    //     })

    //     Object.assign(newTitle, {

    //         class:"productName",
    //         innerText:products[product].name,
    //     })
        
    //     // console.log(products[product].name);
    //     // console.log(products[product]); 
        
    // //     if (products[product].price>4000) {
    // //     console.log(products[product].description);
            
    //     // }
    //     // console.log(products[product]);
    // }
    // }
});
