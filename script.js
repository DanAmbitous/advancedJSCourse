const person = {
  _username: "Player 80100",
  get username() {
    return this._username
  },
  set username(value) {
    if (value.length >= 5) this._username = value
  },
}

person.username = "DanAstonshing"

console.log(person.username)
