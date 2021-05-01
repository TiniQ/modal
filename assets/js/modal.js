let modal = document.querySelector('.modal')
let button = document.querySelector('.delivery__button')
let button2 = document.querySelector('.delivery__button2')
let close = document.querySelector('.modal__close')
let next = document.querySelector('.modal__next')
let modal1 = document.querySelector('#modal-step-one')
let modal2 = document.querySelector('#modal-step-two')

button.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
    setTimeout( () => {
        modal.style.opacity = '1'
    }, 300)
})
button2.addEventListener('click', () => {
    modal2.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
    setTimeout( () => {
        modal2.style.opacity = '1'
    }, 300)
})
close.addEventListener('click', () => {
    modal.style.opacity = '0'
    setTimeout( () => {
        modal.style.display = 'none'
    }, 500)
})

