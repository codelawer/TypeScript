// Static Type Checking
//String - Number - Boolean - Any
var myString;
myString = 'Hello'.toLowerCase() + '     ' + 'World'.slice(0, 3);
//if you assign other type of variable it will give this error
//error TS2322: Type '1' is not assignable to type 'string'.
console.log(myString);
var myNum;
myNum = 0xf00d;
console.log(myNum);
var myBool;
myBool = true;
console.log(!myBool);
var myVar;
myVar = 10 + ' ' + 'string' + (" everything is not  " + myBool);
console.log(myVar);
// let strArr: string[];
var strArr;
strArr = ['Hello', 'World'];
console.log(strArr);
var numArr; // Array<number>
numArr = [1, 2, 3]; //Type 'string' is not assignable to type 'number'.
console.log(numArr);
var boolArr; //Array<boolean>
boolArr = [true, false, true];
console.log(boolArr);
var strNumTuple;
strNumTuple = ['Hello', 1];
console.log(strNumTuple);
var myVoid = undefined;
var myNull = null;
var myUndefined = null;
console.log(myVoid, myNull, myUndefined);
