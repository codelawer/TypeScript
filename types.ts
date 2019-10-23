// Static Type Checking

//String - Number - Boolean - Any
let myString: string;
myString = 'Hello'.toLowerCase() + '     ' + 'World'.slice(0, 3);
//if you assign other type of variable it will give this error
//error TS2322: Type '1' is not assignable to type 'string'.
console.log(myString);

let myNum: number;
myNum = 0xf00d;
console.log(myNum);

let myBool: boolean;
myBool = true;
console.log(!myBool);

let myVar: any;
myVar = 10 + ' ' + 'string' + ` everything is not  ${myBool}`;
console.log(myVar);

// let strArr: string[];
let strArr: Array<string>;
strArr = ['Hello', 'World'];
console.log(strArr);

let numArr: number[]; // Array<number>
numArr = [1, 2, 3]; //Type 'string' is not assignable to type 'number'.
console.log(numArr);

let boolArr: boolean[]; //Array<boolean>
boolArr = [true, false, true];
console.log(boolArr);

let strNumTuple: [string, number];
strNumTuple = ['Hello', 1];
console.log(strNumTuple);

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = null;
console.log(myVoid, myNull, myUndefined);
