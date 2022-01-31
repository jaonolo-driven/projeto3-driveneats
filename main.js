// Variáveis mutáveis, de interesse de quem for publicar
let whatsappNumber = '5517997652657'
let selectedButtons = Array(contentSource.length).fill(null)
let text = ''

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
        text += `- ${contentSource[i].title}: ${foodName}\n`
        contentHolder.lastElementChild.innerText = selectedButtons[i].value
        totalPrice += parseFloat(selectedButtons[i].value)
        console.log(contentHolder)

        popupContent.appendChild(contentHolder)
        contentHolder = contentHolder.cloneNode(true)
    }
    contentHolder.firstElementChild.innerText = 'TOTAL'
    contentHolder.lastElementChild.innerText = totalPrice
    contentHolder.classList.remove('popup-small')
    popupContent.appendChild(contentHolder)


    togglePopup()
})

const togglePopup = () => {
    let popupDiv = document.querySelector('.popup')
    document.body.style.overflowY = document.body.style.overflowY !== 'hidden' ? 'hidden' : 'auto'
    popupDiv.classList.toggle('hidden')
}

const toggleSubmitButton = () => {
    for(let i = 0; i < selectedButtons.length; i++)
        if(selectedButtons[i] === null)
            return 0

    submitButton.disabled = false
    submitButton.innerHTML =  "Fechar pedido"
}

const selectButton = (button) => {
    let n = button.id[button.id.length - 1]
    if(selectedButtons[n] != null)
        selectedButtons[n].classList.toggle('selected')

    button.classList.toggle('selected')
    selectedButtons[n] = button
    
    toggleSubmitButton()
}

const confirmOrder = () => {
    alert("Por favor, insira mais algumas informações a seguir")
    let userName = prompt("Seu nome:")
    let userAdress = prompt("Seu endereço:")
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`)
}

// function handleFullWidthSizing() {
//     const scrollbarWidth = window.innerWidth - document.body.clientWidth
//     document.querySelector('.popup').style.width = `calc(100vw - ${scrollbarWidth}px)`
// }
// handleFullWidthSizing()