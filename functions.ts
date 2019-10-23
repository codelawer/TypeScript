function getSum(num1, num2) {
  return num1 + num2;
}

// console.log(getSum(1, 2));

function getSumTS(num1: number, string: string, num2?: number) {
  return `Hello my name is ${string} and I am ${num1} years old.`;
}
// console.log(getSumTS(33, 'codelawer'));
//ıf you didn't assign anything to parameter:
//---An argument for 'num2' was not provided.
//---TO PREVENT THIS ERROR, add question mark after parameter, before colon

//If you assign other type variable as parameter: Argument of type '"string"' is not assignable to parameter of type 'number'.

let mySum = function(num1: number, num2: any): number {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1);
  } else if (typeof num2 == 'string') {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};
// console.log(mySum(3, '4'));

function getName(firstName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firstName;
  }
  return firstName + ' ' + lastName;
}

console.log(getName('Code'));

function myVoid(): void {
  return;
}
console.log(myVoid);
