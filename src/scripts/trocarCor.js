'use strict'

const stars = document.querySelectorAll('.star')
stars.forEach(star => star.addEventListener('click', ()=>{
    star.classList.toggle('active')
}))

const hearts = document.querySelectorAll('.heart')
hearts.forEach(heart => heart.addEventListener('click', ()=>{
    heart.classList.toggle('active')
}))