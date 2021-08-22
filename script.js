function* idGenerator() {
  let counter = 1

  yield 0
  yield 1

  while (true) {
    counter += 1

    const result = counter
    yield result
  }
}

const generator = idGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
