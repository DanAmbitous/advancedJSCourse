window.name = "Global Name"

const person = {
  name: "Dan",
}

function printName() {
  console.log(this.name)
}

const thePerson = printName.bind(person)
thePerson()
