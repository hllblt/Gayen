import { data } from "./data.js";

const mainProducts = document.querySelector(".mainProducts");
data.map((item) => {
    mainProducts.innerHTML += `<div class="products">${item.img}<h2>${item.title}</h2><p>${item.price}</p></div>`;
});
