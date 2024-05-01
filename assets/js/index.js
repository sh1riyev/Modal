"use strict"

let openButton=document.querySelector(".button-17")

let closeButton=document.querySelector(".modal-overlay .button")

let closeMark=document.querySelector(".modal-overlay .fa-solid ")

let modal=document.querySelector(".modal-overlay")

let overlay=document.querySelector(".overlay")

openButton.addEventListener("click",function(){
    modal.classList.remove("hide")
    modal.classList.add("overlay")
})

closeButton.addEventListener("click",function(){
    modal.classList.add("hide")
    modal.classList.remove("overlay")
})

closeMark.addEventListener("click",function(){
    modal.classList.add("hide")
    modal.classList.remove("overlay")
})

modal.addEventListener("click",function(){
    modal.classList.add("hide")
    modal.classList.remove("overlay")
})