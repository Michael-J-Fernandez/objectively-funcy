// Your code here.

// ----- getFirstName -----
console.log("\ngetFirstName");
// returns the value of the firstName property of the given person object


function getFirstName(personObj) {

  return personObj.firstName;
}

console.log(getFirstName({ firstName: 'Colin', lastName: 'Jaffe' }));
// -> 'Colin'




// ----- getLastName -----
console.log("\ngetLastName");
// returns the value of the lastName property of the given person object


function getLastName(personObj) {
    return personObj.lastName;
}


console.log(getLastName({ firstName: 'Colin', lastName: 'Jaffe' }));
// -> 'Jaffe';




// ----- getFullName -----
console.log("\ngetFullName");
// returns the value of the firstName property plus the lastName property with a space in the middle for the given person object


function getFullName(personObj) {
    return `${personObj.firstName} ${personObj.lastName}`;
}

console.log(getFullName({ firstName: 'Colin', lastName: 'Jaffe' }));
// -> 'Colin Jaffe'




// ----- setFirstName -----
console.log("\nsetFirstName");
// changes the value of the firstName property of the given person object to the given value


function setFirstName(personObj, newFirstName) {
    personObj.firstName = newFirstName;
}

console.log(setFirstName({ firstName: 'Colin', lastName: 'Jaffe' }, 'Redacted'));
// -> {firstName: 'Redacted', lastName: 'Jaffe'};




// ----- setAge -----
console.log("\nsetAge");
// changes the value of the age property of the given person object to the given value


function setAge(personObj, newAge) {
    personObj.age = newAge;
}

console.log(setAge({ firstName: 'Colin', lastName: 'Jaffe', age: 39 }, 45));
// -> {firstName: 'Colin', lastName: 'Jaffe', age: 45};




// ----- giveBirthday -----
console.log("\ngiveBirthday");
// increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property


function giveBirthday(personObj) {
  if (personObj.age === undefined) {
    personObj.age = 1;
    
  } else {
    personObj.age += 1;
  }
}

console.log(giveBirthday({ firstName: 'Colin', lastName: 'Jaffe', age: 39 }));
// -> {firstName: 'Colin', lastName: 'Jaffe', age: 40};




// ----- marry -----
console.log("\nmarry");
// sets the marital status of both given people to true and sets each person's spouseName property to be the full name of the other

const person1 = { firstName: 'Colin', lastName: 'Jaffe', married: false };
const person2 = { firstName: 'Petra', lastName: 'Solano', married: false };

function marry(personObj1, personObj2) {
    personObj1.married = true;
    personObj2.married = true;

    personObj1.spouseName = `${personObj2.firstName} ${personObj2.lastName}`;
    personObj2.spouseName = `${personObj1.firstName} ${personObj1.lastName}`;

    personObj2.lastName = personObj1.lastName;
}

// before marry
console.log(person1);
console.log(person2);

marry(person1, person2);

// after marry
console.log(person1);
console.log(person2);




// ----- divorce -----
console.log("\ndivorce");
// changes the marital status to false and removes the spouseName property from both given people
// person1 and person2 from "marry" challenge will be used for this 


function divorce(personObj1, personObj2) {
    // change married to false
    personObj1.married = false;
    personObj2.married = false;
    // delete spouseName
    delete personObj1.spouseName;
    delete personObj2.spouseName;
}



console.log(person1);
console.log(person2);
divorce(person1, person2);

console.log(person1);
                // -> { firstName: 'Colin', lastName: 'Jaffe', married: false }

console.log(person2);
                // -> { firstName: 'Petra', lastName: 'Solano', married: false}





// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
