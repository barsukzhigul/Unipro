const item1 = document.getElementById('item-1');
item1.addEventListener("click", toggleInfo)
function toggleInfo() {
    if (item1.classList.contains("info__item--active")) {
        item1.classList.remove("info__item--active");
    } else {
        item1.classList.add("info__item--active");
    }
}
const item2 = document.getElementById('item-2');
item2.addEventListener("click", toggleInfo2)
function toggleInfo2() {
    if (item2.classList.contains("info__item--active")) {
        item2.classList.remove("info__item--active");
    } else {
        item2.classList.add("info__item--active");
    }
}
const item3 = document.getElementById('item-3');
item3.addEventListener("click", toggleInfo3)
function toggleInfo3() {
    if (item3.classList.contains("info__item--active")) {
        item3.classList.remove("info__item--active");
    } else {
        item3.classList.add("info__item--active");
    }
}
