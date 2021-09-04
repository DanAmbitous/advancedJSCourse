function sum(a, c, as, b, d) {
  return a + c + as + b + d
}

const sumTwo = sum.bind(null, 5, 10)

console.log(sumTwo(52, 5))
