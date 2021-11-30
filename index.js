const filitre = document.getElementById("filitre");
const filterDiv = document.querySelector(".filter");
const grayBlocker = document.querySelector(".grayBlocker");
const forSale = document.querySelector(".forSale");
const forSaleDropDown = document.querySelector(".forSaleDropDown");
const forSaleLis = document.querySelectorAll(".forSaleDropDown li");
const forRent = document.querySelector(".forRent");
const forRentDropDown = document.querySelector(".forRentDropDown");
const forRentLis = document.querySelectorAll(".forRentDropDown li");

function listOpener(dropDown,lis,condition){
    if (!condition) {
        dropDown.style.opacity = "1";
        lis.forEach(element => element.style.height = "20px")
        condition = !condition;
    } else {
        dropDown.style.opacity = "0";
        lis.forEach(element => element.style.height = "0px")
        condition = !condition;
    }
}

let isSaleOpen = false;

forSale.addEventListener("click", () => {

    if (!isSaleOpen) {
        forSaleDropDown.style.opacity = "1";
        forSaleLis.forEach(element => element.style.height = "20px")
        isSaleOpen = !isSaleOpen;
    } else {
        forSaleDropDown.style.opacity = "0";
        // forRentLis.map((item) => {
        //     item.style.height = "0px";
        // });
        forSaleLis.forEach(element => element.style.height = "0px")
        isSaleOpen = !isSaleOpen;
    }
    
});

let isRentOpen = false;

forRent.addEventListener("click", () => {

    if (!isRentOpen) {
        forRentDropDown.style.opacity = "1";
        // forRentLis.map((item) => {
        //     // item.style.height = "20px";
        //     console.log(item)
        // });
        forRentLis.forEach(element => element.style.height = "20px")
        isRentOpen = !isRentOpen;
    } else {
        forRentDropDown.style.opacity = "0";
        // forRentLis.map((item) => {
        //     item.style.height = "0px";
        // });
        forRentLis.forEach(element => element.style.height = "0px")
        isRentOpen = !isRentOpen;
    }
});

let condition = false;

function filterOpener() {
    if (condition === false) {
        filterDiv.style.left = "0";
        grayBlocker.style.opacity = "1";
        grayBlocker.style.zIndex = "10";
        condition = !condition;
    } else {
        filterDiv.style.left = "-300px";
        grayBlocker.style.opacity = "0";
        grayBlocker.style.zIndex = "-10";
        condition = !condition;
    }
}

filitre.addEventListener("click", () => {
    filterOpener();
});

grayBlocker.addEventListener("click", () => {
    filterOpener();
});
