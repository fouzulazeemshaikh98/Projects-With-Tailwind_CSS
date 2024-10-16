let minus = 0;
let plus = 0;
// let hPlus = document.getElementById("plus");
let one = document.getElementById("one");
function dec() {
    minus--;;
    one.innerHTML = minus;
}

function inc() {
    minus++
    one.innerHTML = minus;
}

function itemsAdded() {
    let showItems = document.getElementById("showItems");
    showItems.innerHTML = "Your Product has been added to cart!"
}

