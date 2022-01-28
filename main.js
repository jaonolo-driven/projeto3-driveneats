let selectedButtons = [null, null, null]
let submitButton = document.querySelector('#submit')
submitButton.disabled = true
submitButton.innerHTML =  "Selecione os 3 itens para fechar o pedido"

let whatsappNumber = '5517997652657'
let text = ''
submitButton.addEventListener('click', () => {
    alert("Por favor, insira mais algumas informações a seguir")
    let userName = prompt("Seu nome:")
    let userAdress = prompt("Seu endereço:")
    console.log(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`)
})

let selectButton = (button) => {
    let n = button.id[button.id.length - 1]
    if(selectedButtons[n] != null)
    {
        selectedButtons[n].classList.toggle('selected')
        selectedButtons[n].querySelector('ion-icon').classList.toggle('hidden')
    }

    button.classList.toggle('selected')
    button.querySelector('ion-icon').classList.toggle('hidden')
    selectedButtons[n] = button

    text = 'Olá, gostaria de fazer o pedido:\n'
    for(let i = 0; i < selectedButtons.length; i++){
        if(selectedButtons[i] == null)
            return 0
        text += `${selectedButtons[i].value}\n`
    }
    submitButton.disabled = false
    submitButton.innerHTML =  "Fechar pedido"
} 

let articles = document.querySelectorAll('article')
for(let i = 0; i < articles.length; i++){
    for(let j = 0; j < 3; j++){
        let button = document.querySelector('button').cloneNode(true)
        button.setAttribute('id', `group${i}`)
        button.setAttribute('value', `-${i}-${j}-`);
        articles[i].appendChild(button)
    }
}