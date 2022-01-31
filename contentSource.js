const contentSource = [
    {
        name: 'Prato',
        dataIdentifier: 'dishes',
        title: 'Primeiro, seu prato',
        values: [
            {
                name: 'Excaliburguer',
                description: 'El grand burgon',
                price: 23.40
            },
            {
                name: 'Japacama',
                description: 'El grand burgon',
                price: 23.40
            },
            {
                name: 'Obra de arte',
                description: 'El grand burgon',
                price: 23.40
            },
        ]
    },
    {
        name: 'Bebida',
        dataIdentifier: 'drinks',
        title: 'Depois, a bebida',
        values: [
            {
                name: 'Excaliburguer',
                description: 'El grand burgon',
                price: 23.40
            },
            {
                name: 'Japacama',
                description: 'El grand burgon',
                price: 23.40
            },
            {
                name: 'Obra de arte',
                description: 'El grand burgon',
                price: 23.40
            },
        ]
    },
    {
        name: 'Sobremesa',
        dataIdentifier: 'desserts',
        title: 'Por ultimo, a sobremesa',
        values: [
            {
                name: 'Excaliburguer',
                description: 'El grand burgon, lu ma gran dos mas gran de todos',
                price: 23.40
            },
            {
                name: 'Japacama',
                description: 'El grand burgon',
                price: 23.40
            },
            {
                name: 'Obra de arte',
                description: 'El grand burgon',
                price: 23.40
            },
        ]
    },
    // {
    //     title: 'Por ultimo, a sobremesa',
    //     values: [
    //         {
    //             name: 'Excaliburguer',
    //             price: 23.40
    //         },
    //         {
    //             name: 'Japacama', 
    //             price: 23.40
    //         },
    //         {
    //             name: 'Obra de arte',
    //             price: 23.40
    //         },
    //     ]
    // }
]

let main = document.querySelector('main')
let section = main.querySelector('section')
for(let i = 0; i < contentSource.length; i++){
    let blankSection = section.cloneNode(true)

    let button = section.querySelector('button')
    button.setAttribute('id', `group${i}`)
    for(let j = 0; j < contentSource[i].values.length; j++){
        button.setAttribute('value', `${contentSource[i].values[j].price}`)
        button.setAttribute('data-identifier', 'food-option')
        button.querySelector('img').src = `public/${contentSource[i].values[j].name}.jpg`
        button.querySelector('img').alt = contentSource[i].values[j].name
        button.querySelector('.title').innerText = contentSource[i].values[j].name
        button.querySelector('.title').setAttribute('data-identifier', 'food-title')
        button.querySelector('.description').innerText = contentSource[i].values[j].description
        button.querySelector('.price').innerText = 'R$ ' + contentSource[i].values[j].price.toFixed(2)
        button.querySelector('.price').setAttribute('data-identifier', 'food-price')
        section.querySelector('article').appendChild(button)
        button = button.cloneNode(true)
    }
    section.querySelector('section > span').innerHTML = contentSource[i].title
    section.setAttribute('data-identifier', contentSource[i].dataIdentifier)
    main.appendChild(section)

    section = blankSection
}