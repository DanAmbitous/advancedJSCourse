function removeDups(array) {
  let tracker = {}

  console.log(array)

  array.forEach((element) => {
    tracker[element] = element
  })

  console.log(tracker)

  array.length = ""

  for (const [key, value] of Object.entries(tracker)) {
    array.push(Number(key))
  }

  console.log(array)
}

removeDups([1, 2, 3, 4, 3, 2, 5])
