const url = window.location.href;
console.log(url);
const urlProduct = new URL (url);
console.log(urlProduct)
const idProduct = urlProduct.searchParams.get("id");
console.log(idProduct);