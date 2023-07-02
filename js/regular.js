
//modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()

modal.onclick = () => {
    if (event.target === modal) {
        closeModal()
    }
}
setTimeout(function () { 
    openModal(); 
}, 10000);

window.addEventListener('scroll', () => {
    const currentHeight = document.documentElement.scrollHeight - window.scrollY
    if (currentHeight === document.documentElement.clientHeight ) {
        openModal()
    }
})

// REG EXP
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'YOUR NUMBER IS VALID!'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'YOUR NUMBER IS NOT VALID'
        phoneResult.style.color = 'red'
    }
}
