'use strict'

import { listaProdutos } from "./produtos.js"

const card = listaProdutos.map(criarCard)

function criarCard (produto) {
    let card = document.createElement('div')
    card.className = 'card'

    let classification = document.createElement('div')
    classification.className = 'classification'

    let star = document.createElement('span')
    star.className = 'star'
    star.innerHTML = '&starf;'

    let classificationNumber = document.createElement('span')
    classificationNumber.className = 'classification-number'
    classificationNumber.textContent = produto.classificacao

    let heart = document.createElement('span')
    heart.className = 'heart'
    heart.innerHTML = '&hearts;'

    let img = document.createElement('img')
    img.src = `./src/img/${produto.imagem}`
    img.alt = `Foto de ${produto.nome}`

    let name = document.createElement('span')
    name.className = 'name'
    name.textContent = produto.nome

    let price = document.createElement('span')
    price.className = 'price'
    price.textContent = `R$ ${produto.preco}`

    classification.append(star, classificationNumber, heart)
    card.append(classification, img, name, price)

    return card
}

document.getElementById('container').replaceChildren(...card)