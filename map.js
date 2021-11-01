// COM Map() PODEMOS CRIAR NOVOS ARRAYS DO MESMO TAMANHO
// MAS FAZENDO ALTERAÇÕES E RETORNANDO O QUE QUISER
// ARRAY SÓ DE ids, SÓ COM NOMES E ETC.

const Products = require("./api/Products");

// const prodId = Products.map(product => product.id)
// const prodName = Products.map(product => product.name)
// const prodPrice = Products.map(product => product.price)
// const prodCategory = Products.map(product => product.category)

// console.log(`.
//   ID: ${prodId}
//   Nome: ${prodName}
//   Preço: ${prodPrice}
//   Categoria: ${prodCategory}
// `)

const addPercentToPrice = Products.map(product => {
  const percent = (product.price / 10) + product.price
  return `${product.name}: ${percent.toFixed(2)}`
})

console.log(addPercentToPrice)