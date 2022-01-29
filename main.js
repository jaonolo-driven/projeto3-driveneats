// Variáveis mutáveis, de interesse de quem for publicar
let whatsappNumber = '5517997652657'
let text = 'Olá, gostaria de fazer o pedido:\n'
let contentSource = [
    ['Excaliburguer', 'Japacama', 'Obra de arte'], // Pratos Principais
    [], // Bebidas
    [] // Sobremesas
]
let sectionNames = [
    'Primeiro, seu prato',
    'Depois, a bebida',
    'Por ultimo, a sobremesa'
]

let submitButton = document.querySelector('footer button')
submitButton.disabled = true
submitButton.innerHTML =  "Selecione os 3 itens para fechar o pedido"

submitButton.addEventListener('click', () => {
    alert("Por favor, insira mais algumas informações a seguir")
    let userName = prompt("Seu nome:")
    let userAdress = prompt("Seu endereço:")
    console.log(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`)
})

// Colocando os botões para as opções de comida disponíveis
let main = document.querySelector('main')
let section = main.querySelector('section')
let button = section.querySelector('button')
for(let i = 0; i < contentSource.length; i++){
    button.setAttribute('id', `group${i}`)
    for(let j = 0; j < contentSource[i].length; j++){
        button.setAttribute('value', `${contentSource[i][j]}`)
        button.querySelector('img').src = `public/${contentSource[i][j]}.jpg`
        section.querySelector('article').appendChild(button)
        button = button.cloneNode(true)
    }
    section.querySelector('.titulo').innerHTML = sectionNames[i]
    main.appendChild(section)
    section = section.cloneNode(true)
}

let selectedButtons = Array(contentSource.length).fill(null) // Variável que armazena os botões selecionados de cada categoria

let toggleSubmitButton = () => {
    for(let i = 0; i < selectedButtons.length; i++){
        if(selectedButtons[i] === null)
            return 0
        text += `${selectedButtons[i].value}\n`
    }
    submitButton.disabled = false
    submitButton.innerHTML =  "Fechar pedido"
}

// Função que seleciona o botão clicado
let selectButton = (button) => {
    let n = button.id[button.id.length - 1]
    if(selectedButtons[n] != null)
        selectedButtons[n].classList.toggle('selected')

    button.classList.toggle('selected')
    selectedButtons[n] = button
    
    toggleSubmitButton()
}