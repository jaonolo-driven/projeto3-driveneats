const realConversion = (number) => number.toFixed(2).replace('.', ',')

const togglePopup = () => {
    document.body.style.overflowY = document.body.style.overflowY !== 'hidden' ? 'hidden' : 'auto'
    document.querySelector('.popup').classList.toggle('hidden')
}

const submitOrder = () => {
    alert("Por favor, insira mais algumas informações a seguir")
    let userName = prompt("Seu nome:")
    let userAdress = prompt("Seu endereço:")
    text += `\nNome: ${userName}\nEndereço: ${userAdress}`
    location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}

const selectButton = (button) => {
    let n = button.id[button.id.length - 1]
    if(selectedButtons[n] != null)
        selectedButtons[n].classList.toggle('selected')

    button.classList.toggle('selected')
    selectedButtons[n] = button
    
    toggleSubmitButton()
}

const toggleSubmitButton = () => {
    let submitButton = document.querySelector('footer button')
    for(let i = 0; i < selectedButtons.length; i++)
        if(selectedButtons[i] === null)
            return 0

    submitButton.disabled = false
    submitButton.innerHTML =  "Fechar pedido"
}