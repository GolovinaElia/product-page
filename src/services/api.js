import products from "./products.json";
import sizes from "./sizes.json";

export function getSizes() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sizes), 250)
  })
}

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 250)
  })
}

export function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id == id)
      if (product) {
        resolve(product)
      } else {
        reject(new Error('Product not found'))
      }
    }, 250)
  })
}
