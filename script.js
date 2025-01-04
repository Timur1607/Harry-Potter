import {data} from "./data.js";
console.log(data);
let articles = document.querySelector('.articles')
let form = document.querySelector('.form')

let input = document.querySelector('.header__searching_name_Input')

let inputHouse = document.querySelector('.header__searching_house_Input')
let div = document.querySelector('.header__searching_house_div')
let Slytherin = document.querySelector('.Slytherin')
let Gryffindor = document.querySelector('.Gryffindor')
let Hufflepuff = document.querySelector('.Hufflepuff')
let Ravenclaw = document.querySelector('.Ravenclaw')

let data2 = []



let findArticle = () => {
    articles.innerHTML = ''
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase().includes(input.value.toLowerCase()) && inputHouse.value === ''){
            data2[0] = data[i]
            let article = document.createElement('article')
            article.classList.add('article')
            let alive = ''
            if(data[i].alive === true){
                alive = 'yes'
            } else{
                alive = 'no'
            }
            article.innerHTML = `
                <img class="article__picture_img" src="${data[i].image}" alt="heroes picture">
                <div class="article__main">
                    <p class="article__main_name">${data[i].name}</p>
                    <p class="article__main_actor description">Actor: ${data[i].actor}</p>
                    <p class="article__main_gender description">Gender: ${data[i].gender}</p>
                    <p class="article__main_house description">House: ${data[i].house}</p>
                    <p class="article__main_wandCore description">Wand core: ${data[i].wand.core}</p>
                    <p class="article__main_alive description">Alive: ${alive}</p>
                </div>
            `
            articles.appendChild(article)


        } else if(input.value === '' && inputHouse.value !== ''){
            if(data[i].house === inputHouse.value){
                data2[0] = data[i]
                let article = document.createElement('article')
                article.classList.add('article')
                let alive = ''
                if(data[i].alive === true){
                    alive = 'yes'
                } else{
                    alive = 'no'
                }
                article.innerHTML = `
                    <img class="article__picture_img" src="${data[i].image}" alt="heroes picture">
                    <div class="article__main">
                        <p class="article__main_name">${data[i].name}</p>
                        <p class="article__main_actor description">Actor: ${data[i].actor}</p>
                        <p class="article__main_gender description">Gender: ${data[i].gender}</p>
                        <p class="article__main_house description">House: ${data[i].house}</p>
                        <p class="article__main_wandCore description">Wand core: ${data[i].wand.core}</p>
                        <p class="article__main_alive description">Alive: ${alive}</p>
                    </div>
                `
                articles.appendChild(article)
            }
        }
    }

    if(articles.innerHTML === ''){
        let p = document.createElement('p')
        p.classList.add('not_found')
        p.innerHTML= `this character was not found(`
        articles.appendChild(p)
    } else{
        console.log('yes');
    }
}

form.addEventListener('input', (event) => {
    event.preventDefault()
    articles.innerHTML = ''
    console.log('запускай');
    findArticle()
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

inputHouse.addEventListener('click', () => {
    div.classList.toggle('divScript')
    console.log('check');

    Slytherin.addEventListener('click', () => {
        inputHouse.value = 'Slytherin'
        div.classList.remove('divScript')
        findArticle()
    })
    Gryffindor.addEventListener('click', () => {
        inputHouse.value = 'Gryffindor'
        div.classList.remove('divScript')
        findArticle()
    })
    Hufflepuff.addEventListener('click', () => {
        inputHouse.value = 'Hufflepuff'
        div.classList.remove('divScript')
        findArticle()
    })
    Ravenclaw.addEventListener('click', () => {
        inputHouse.value = 'Ravenclaw'
        div.classList.remove('divScript')
        findArticle()
    })
})
