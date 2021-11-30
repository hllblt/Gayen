const filitre = document.getElementById("filitre");
const filterDiv = document.querySelector(".filter");
const grayBlocker = document.querySelector(".grayBlocker");
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

grayBlocker.addEventListener("click",()=>{
    filterOpener()
});
