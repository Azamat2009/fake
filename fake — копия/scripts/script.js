fetch("http://localhost:3000/people")
.then((res) => res.json())
.then((res) => reload(res))
.then(err => console.log('WI-FI IS NOT WORKING 404'))


function reload(arr) {

    for (let item of arr) {
       let cont = document.querySelector(".cont-imgs")
       let img = document.createElement("img")
       
       img.src = item.url
       cont.append(img)
    }
}

let cards = [
    {
        id: Math.random(),
        title: 'Walnut MagSafe Stand',
        price: '120$',
        img: 'iphone'
    },
    {
        id: Math.random(),
        title: 'Walnut Laptop Riser',
        price: '$150',
        img: 'laptop'
    },
    {
        id: Math.random(),
        title: 'Walnut iPad Stand',
        price: '$80',
        img: 'ipad'
    },
    {
        id: Math.random(),
        title: 'Walnut Monitor Stand',
        price: '$100',
        img: 'monitor'
    }
]

let cardDiv = document.querySelector('.cards')

for (let item of cards) {
    let card = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('h4')
    let price = document.createElement('h4')

    card.classList.add('card')
    img.src = `./assets/${item.img}.png`

    title.innerHTML = item.title
    price.innerHTML = item.price

    cardDiv.append(card)
    card.append(img,title,price)
}