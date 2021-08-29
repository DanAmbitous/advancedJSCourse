const array = ["a", "b", "c", "d"]
const person = {
  name: "Kyle",
  age: 12,
  favoriteFood: "rice",
  address: {
    street: "123 main st",
    apartment: {
      room: "ICXVII",
    },
    city: "somewhere",
  },
  zipcode: 12341,
}

function addAndMulit({ a, b = 12 }) {
  return ([sum, product] = [a + b, a * b])
}

const result = addAndMulit({ a: 5 })

console.log(result)
