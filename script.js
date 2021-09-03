const person = {
  _username: "Player 80100",
  _password: Math.floor(Math.random() * 100000),
  get username() {
    return this._username
  },
  set username(value) {
    if (value.length >= 5) this._username = value
  },
  get password() {
    return this._password
  },
  set password(password) {
    if (password.length >= 5) this._password = password
  },
}

person.username = "DanAstonshing"
person.password = "123238"

console.log(person.username, person.password)
