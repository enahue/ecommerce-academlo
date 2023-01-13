import db from '../data/data.js'
import { carrito, pintarCarritoDeCompras } from './cart.js'

const productos = db

const productList = document.querySelector('.products__list')

function pintarProductos() {
  let html = ''

  for (let { id, nombre, descripcion, precio, cantidad, imagen, categoria } of productos) {
    html += `<div class="col-lg-3 col-md-6">
    <div class="single-product">
      <div class="product_img">
      <img class="img-fluid" src="${imagen}" alt="${nombre}">
      <span class="product__stock">Stock: ${cantidad}</span></div>
      <div class="product-details">
        <h6>${nombre}</h6>
        <span class="descripcion">${descripcion}</span>
        <div class="price">
          <h6>$${precio}</h6>
          <h6 class="l-through">$${precio+100}</h6>
        </div>
        <div class="prd-bottom">

        <button class="button btn--cart" data-id="${id}">
        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
        </button> 
        <button class="button wish--button"><i class="fa fa-heart" aria-hidden="true"></i></button>
        </div>
        
      </div>
    </div>
  </div>
  `
  }

  productList.innerHTML = html
}

function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }

  pintarCarritoDeCompras()
}

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

export {
  productos,
  pintarProductos,
  agregarCarrito
}