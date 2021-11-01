/*
*  QUANDO DEVMOS USAR O MAP?
*  Quando queremos um novo array com a mes quantidade,
*  mas que cada item seja transformado.
*/

const Numbers = require("./api/Numbers");
const Products = require("./api/Products");

// EXEMPLO 01
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

//EXEMPLO 02
// const addPercentToPrice = Products.map(product => {
//   const percent = (product.price / 10) + product.price
//   return `${product.name}: ${percent.toFixed(2)}`
// })

// console.log(addPercentToPrice)

// EXEMPLO 03
const result = Numbers.map(number => number)
const sumAfter = Numbers.map(number => number + 1)
const mult = Numbers.map(number => number * 2)
const division = Numbers.map(number => number / 2)
const restOfDivision = Numbers.map(number => number % 2 === 0)
const squareRoot = Numbers.map(number => Math.sqrt(number).toFixed(2))

console.log(`
  Resultado original: ${result}
  Soma + 1: ${sumAfter}
  Multplicação: ${mult}
  Divisão: ${division}
  Resto de uma divisão: ${restOfDivision}
  Raiz quadrada: ${squareRoot}
`)