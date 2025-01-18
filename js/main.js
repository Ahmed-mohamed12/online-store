
let cart=document.getElementById("cart")
let menu=document.getElementById("menu")
function showCart(){
    cart.classList.toggle("open")
}
function hideCart(){
    cart.classList.toggle("open")
}

function openmenu(){
    menu.classList.add("active")
}
function closemenu(){
    menu.classList.remove("active")
}
// ------change item img----------
let bigImg=document.getElementById("bigImg")
function changeitemimg(img){
    bigImg.src=img
}

var filter=document.querySelector(".filter")
function openCloseFilter(){
    filter.classList.toggle("active")
}



