let contentSource = [
    {
        title: 'Primeiro, seu prato',
        values: [
            {
                name: 'Excaliburguer',
                price: 23.40
            },
            {
                name: 'Japacama', 
                price: 23.40
            },
            {
                name: 'Obra de arte',
                price: 23.40
            },
        ]
    },
    {
        title: 'Depois, a bebida',
        values: [
            {
                name: 'Excaliburguer',
                price: 23.40
            },
            {
                name: 'Japacama', 
                price: 23.40
            },
            {
                name: 'Obra de arte',
                price: 23.40
            },
        ]
    },
    {
        title: 'Por ultimo, a sobremesa',
        values: [
            {
                name: 'Excaliburguer',
                price: 23.40
            },
            {
                name: 'Japacama', 
                price: 23.40
            },
            {
                name: 'Obra de arte',
                price: 23.40
            },
        ]
    }
]

let main = document.querySelector('main')
let section = main.querySelector('section')
for(let i = 0; i < contentSource.length; i++){
    let blankSection = section.cloneNode(true)

    let button = section.querySelector('button')
    button.setAttribute('id', `group${i}`)
    for(let j = 0; j < contentSource[i].values.length; j++){
        button.setAttribute('value', `${contentSource[i].values[j].price}`)
        button.querySelector('img').src = `public/${contentSource[i].values[j].name}.jpg`
        button.querySelector('img').alt = contentSource[i].values[j].name
        button.querySelector('.title').innerText = contentSource[i].values[j].name
        button.querySelector('.description').innerText = `public/${contentSource[i].values[j].name}.jpg`
        button.querySelector('.price').innerText = contentSource[i].values[j].price
        section.querySelector('article').appendChild(button)
        button = button.cloneNode(true)
    }
    section.querySelector('section > span').innerHTML = contentSource[i].title
    main.appendChild(section)

    section = blankSection
}