import {data} from "./data.js";
console.log(data);
let articles = document.querySelector('.articles')

let inputHouse = document.querySelector('.header__searching_house_Input')
let div = document.querySelector('.header__searching_house_div')
let Slytherin = document.querySelector('.Slytherin')
let Gryffindor = document.querySelector('.Gryffindor')
let Hufflepuff = document.querySelector('.Hufflepuff')
let Ravenclaw = document.querySelector('.Ravenclaw')


inputHouse.addEventListener('click', () => {
    div.classList.toggle('divScript')
    console.log('check');
    Slytherin.addEventListener('click', () => {
        inputHouse.value = 'Slytherin'
        div.classList.remove('divScript')
    })
    Gryffindor.addEventListener('click', () => {
        inputHouse.value = 'Gryffindor'
        div.classList.remove('divScript')
    })
    Hufflepuff.addEventListener('click', () => {
        inputHouse.value = 'Hufflepuff'
        div.classList.remove('divScript')
    })
    Ravenclaw.addEventListener('click', () => {
        inputHouse.value = 'Ravenclaw'
        div.classList.remove('divScript')
    })
})

let createArticle = (info) => {
    let article = document.createElement('article')
    article.classList.add('article')

    let alive = ''
    if(data[info].alive === true){
        alive = 'yes'
    } else{
        alive = 'no'
    }

    article.innerHTML = `
        <img class="article__picture_img" src="${data[info].image}" alt="heroes picture">
        <div class="article__main">
            <p class="article__main_name">${data[info].name}</p>
            <p class="article__main_actor description">Actor: ${data[info].actor}</p>
            <p class="article__main_gender description">Gender: ${data[info].gender}</p>
            <p class="article__main_house description">House: ${data[info].house}</p>
            <p class="article__main_wandCore description">Wand core: ${data[info].wand.core}</p>
            <p class="article__main_alive description">Alive: ${alive}</p>
        </div>
    `
    console.log('yes');
    
    articles.appendChild(article)
}

for(let i = 0; i < data.length; i++){
    createArticle(i)
}