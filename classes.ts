class User {
  public name: string;
  protected email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log(`User created ${this.name}`);
  }
}

let John = new User('John', 'john@gmail.com', 33);

console.log(John.name);

//INHERITENCE

class Members extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
}
