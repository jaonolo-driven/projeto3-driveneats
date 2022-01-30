// Variáveis mutáveis, de interesse de quem for publicar
let whatsappNumber = '5517997652657'
let text = 'Olá, gostaria de fazer o pedido:\n' 

let submitButton = document.querySelector('footer button')
submitButton.disabled = true
submitButton.innerHTML =  "Selecione os 3 itens para fechar o pedido"

submitButton.addEventListener('click', () => {
    let popupDiv = document.querySelector('.popup')
    let popupContent = popupDiv.querySelector('.popup-content')
    let contentHolder = popupContent.querySelector('div')

    popupDiv.style.top = `${window.scrollY}px`
    for(let i = 0; i < selectedButtons.length; i++){
        contentHolder.firstElementChild.innerText = selectedButtons[i].querySelector('.title').innerText
        contentHolder.lastElementChild.innerText = selectedButtons[i].value
        popupContent.appendChild(contentHolder)
        contentHolder = contentHolder.cloneNode(true)
    }

    togglePopup()
})

let selectedButtons = Array(contentSource.length).fill(null) // Variável que armazena os botões selecionados de cada categoria

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

// Função que seleciona o botão clicado
const selectButton = (button) => {
    let n = button.id[button.id.length - 1]
    if(selectedButtons[n] != null)
        selectedButtons[n].classList.toggle('selected')

    button.classList.toggle('selected')
    selectedButtons[n] = button
    
    toggleSubmitButton()
}

const confirmOrder = () => {
    for(let i = 0; i < selectedButtons.length; i++)
        text += `${selectedButtons[i].value}\n`
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