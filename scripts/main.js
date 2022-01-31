let text = ''

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
        button.querySelector('.price').innerText = 'R$ ' + realConversion(contentSource[i].values[j].price)
        button.querySelector('.price').setAttribute('data-identifier', 'food-price')
        section.querySelector('article').appendChild(button)
        button = button.cloneNode(true)
    }
    section.querySelector('section > span').innerHTML = contentSource[i].title
    section.setAttribute('data-identifier', contentSource[i].dataIdentifier)
    main.appendChild(section)

    section = blankSection
}

let submitButton = document.querySelector('footer button')
submitButton.disabled = true
submitButton.innerHTML =  `Selecione os ${selectedButtons.length} itens para fechar o pedido`

submitButton.addEventListener('click', () => {
    text = 'Olá, gostaria de fazer o pedido:\n'
    let popupDiv = document.querySelector('.popup')
    let popupContent = popupDiv.querySelector('.popup-content')
    let contentHolder = popupContent.querySelector('div')
    popupContent.innerHTML = ''
    let totalPrice = 0

    popupDiv.style.top = `${window.scrollY}px`
    for(let i = 0; i < selectedButtons.length; i++){
        let foodName = selectedButtons[i].querySelector('.title').innerText
        contentHolder.firstElementChild.innerText = foodName
        text += `- ${contentSource[i].name}: ${foodName}\n`
        contentHolder.lastElementChild.innerText = realConversion(parseFloat(selectedButtons[i].value))
        totalPrice += parseFloat(selectedButtons[i].value)

        popupContent.appendChild(contentHolder)
        contentHolder = contentHolder.cloneNode(true)
    }
    totalPrice = realConversion(totalPrice)
    contentHolder.firstElementChild.innerText = 'TOTAL'
    contentHolder.lastElementChild.innerText = `R$ ${totalPrice}`
    text += `Total: R$ ${totalPrice}\n`
    contentHolder.classList.remove('popup-small')
    popupContent.appendChild(contentHolder)


    togglePopup()
})