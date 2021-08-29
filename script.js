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

const {
  name: personsName,
  age,
  address: {
    apartment: { room },
  },
  zipcode = 12312,
} = person

console.log(personsName, age, room, zipcode)
