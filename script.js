function removeDups(array) {
  return [...new Set(array)]
}

removeDups([1, 2, 3, 4, 3, 2, 5])
