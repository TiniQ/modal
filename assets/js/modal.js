let modal = document.querySelector('.modal')
let button = document.querySelector('.delivery__button')
let close = document.querySelector('.modal__close')

button.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflowY = 'hidden'
    setTimeout( () => {
        modal.style.opacity = '1'
    }, 300)
})
close.addEventListener('click', () => {
    modal.style.opacity = '0'
    setTimeout( () => {
        modal.style.display = 'none'
    }, 500)
})