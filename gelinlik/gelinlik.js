import { data } from "./data.js";

const mainProducts = document.querySelector(".mainProducts");
data.map((item) => {
    mainProducts.innerHTML += `<div class="products">${item.img}<h2>${item.title}</h2><p>${item.price}</p></div>`;
});

const sortBox = document.querySelector(".sortSelectBox");
sortBox.addEventListener("change", () => {
    console.log(sortBox.value);
});

const filterButton = document.querySelector(".filterButton");
const grayBlocker = document.querySelector(".grayBlocker");
const filter = document.querySelector(".filter");
let filterCondition = false;
filterButton.addEventListener("click", () => {
    grayBlocker.style.opacity = "1";
    grayBlocker.style.zIndex = "10";
    filter.style.left = "0px";
});
grayBlocker.addEventListener("click", () => {
    grayBlocker.style.opacity = "0";
    grayBlocker.style.zIndex = "-10";
    filter.style.left = "-300px";
});

const filterActive = document.querySelectorAll(".filterActive");
filterActive.forEach((element) => {
    element.addEventListener("click", () => {
        console.log("hi");
    });
});
