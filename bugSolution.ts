function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}
//Or
user.forEach(person => console.log(greeter(person)));