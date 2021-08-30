const array = ["a", "b", "c", "d"]

const person = {
  name: "Kyle",
  age: 25,
  favoriteFood: "Rice",
  address: {
    street: "123 Main St",
    city: "Somewhere",
    zipcode: "55555",
  },
}

function sum(...numberArray) {
  return numberArray.reduce((sum, number) => (sum += number), 0)
}

console.log(sum(10, 5, 51, 50, 12))
