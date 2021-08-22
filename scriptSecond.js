const sym = Symbol.for("name")

export const person = {
  age: 16,
  name: "Danial",
  [sym]: "Azadpour",
}

console.log(person[sym])
