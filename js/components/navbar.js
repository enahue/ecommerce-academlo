function navbar() {
  const navbarMenu = document.querySelector('.navbar__menu')
  const cartMenu = document.querySelector('.btn-reset')

  document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar__toggle')) {
      navbarMenu.classList.toggle('show--menu')
    }

    if (e.target.closest('.navbar__close')) {
      navbarMenu.classList.remove('show--menu')
    }

    /* Menu Carrito */
    if (e.target.closest('.navbar__cart')) {
      cartMenu.classList.toggle('show--cart')
    }

    if (e.target.closest('.cart__close')) {
      cartMenu.classList.remove('show--cart')
    }
  })
}
const vari = document.querySelector('.btn-reset')
const car = document.querySelector('.carrito')
const bolsa = document.querySelector('.bolsa')
const close = document.querySelector('.cart__close')

close.addEventListener('click', () => {
  car.removeAttribute('id', 'show--cart')
})
vari.addEventListener('click', () => {
  car.setAttribute('id', 'carrito')
})
bolsa.addEventListener('click',() => {
  car.setAttribute('id', 'carrito')
})

export default navbar