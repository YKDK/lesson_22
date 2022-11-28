"use strict"

const MY_NAME = `kolya`;
console.log(typeof MY_NAME);
console.log (MY_NAME);

const MY_LAST_NAME = `kirienko`;
console.log(typeof MY_LAST_NAME);
console.log(MY_LAST_NAME);

let myAge = 38;
console.log(typeof myAge);
console.log(myAge);

// let userName;
// userName = `${MY_NAME} ${MY_LAST_NAME}`;
// console.log(userName);

let result = 10 * 2;
console.log(typeof result);
console.log(result);

let resultAge = "myAge" * 2;
console.log(typeof resultAge);
console.log(result);

let newAge = myAge * 2;
console.log(typeof newAge);
console.log(newAge);

let userAge2 = MY_NAME + MY_LAST_NAME + myAge;
console.log(typeof userAge2);
console.log(userAge2);

newAge = null;
console.log(typeof newAge);
console.log(newAge);

newAge = "0";
console.log(typeof newAge);
console.log(newAge);

newAge = 0;
console.log(typeof newAge);
console.log(newAge);


newAge = 10/0;
console.log(typeof newAge);
console.log(newAge);

newAge = 10+0;
console.log(typeof newAge);
console.log(newAge);

newAge = "10" + 0;
console.log(typeof newAge);
console.log(newAge);

newAge  = Number ("10" + 0);
console.log(typeof newAge);
console.log(newAge);

newAge  = Number (MY_LAST_NAME + 0);
console.log(typeof newAge);
console.log(newAge);

newAge  = (10 > 0);
console.log(typeof newAge);
console.log(newAge);

newAge  = (MY_LAST_NAME > 0);
console.log(typeof newAge);
console.log(newAge);

newAge  = (MY_LAST_NAME > myAge);
console.log(typeof newAge);
console.log(newAge);

newAge  = 40;
myAge = 35;
result = newAge + myAge
console.log(typeof result);
console.log(result);

newAge  = `40`;
myAge = `35`;
result = newAge + myAge
console.log(typeof result);
console.log(result);

newAge  = 40;
myAge = MY_NAME;
result = newAge + myAge
console.log(typeof result);
console.log(result);

newAge  = 39;
myAge = 38;
result = newAge + myAge
console.log(typeof result);
console.log(result);

newAge  = 39;
myAge = 38;

result = newAge < myAge;
console.log(typeof result);
console.log(result);



if (myAge < newAge) {

  console.log(myAge)
} else {
  console.log(newAge)
}

// основи синтаксису
console.log('учим JS');

// змінні

// колір очей користувача
let userColorEye;

let user;
let userName;
userName = `Вася`;
console.log(typeof userName);
console.log(userName);

user = userName;
console.log(typeof user);
console.log(user);

const BLOCK_SIZE = 14 + 50;
console.log(BLOCK_SIZE);

if (true) {
  var size = 15;
  // let size = 15;
}
console.log(size)

let userAge = 36;
let userInfo = `фрілансер ${(userAge)}`;
console.log(userInfo);

let userHeight = 145 / 0;
console.log(typeof userHeight);
console.log(userHeight);

// let userHeight;
// console.log(typeof userHeight);
// console.log(userHeight);

let userSize = "45" / "8";
console.log(typeof userSize);
console.log(userSize);