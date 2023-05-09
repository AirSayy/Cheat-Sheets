// String Methods in JavaScript


// charAt() : Returns a character at a specified index/position.
const myString = 'I am a software developer'
console.log(myString.charAt(0))  //"I"
console.log(myString.charAt(3))  //"m"


// charCodeAt() : Returns a unicode of the character at a specific index
const myString = 'I am a software developer'
console.log(myString.charCodeAt(0))  //73
console.log(myString.charCodeAt(3))  //109


// concat() : Joins two or more strings and returns a new string
const myString = 'I am a software developer.'
const secondString = 'Hire me'

console.log(myString.concat(secondString))  // I am a software developer.Hire me


// endsWith() : Checks if a string ends with a specified string or character
const myString = 'I am a software developer.'

console.log(myString.endsWith('software'))   //false
console.log(myString.endsWith('developer.'))   //true


// fromCharCode() : This converts unicode values to characters
const myString = 'I am a software developer.'

console.log(String.fromCharCode(73))   //"I"
console.log(String.fromCharCode(109))  //"m"


// includes() : This checks if the string contains the specified string or character.
const myString = 'I am a software developer.'

console.log(myString.includes('y'))  //false
console.log(myString.includes('t'))  //true


// indexOf() : This method returns the position of the first found occurence of the specified value of a string.
const myString = 'I am a software developer.'

console.log(myString.indexOf('software'))  // 7
console.log(myString.indexOf('am'))  // 2


// lastIndexOf() : This method returns the position of the last found occurence of the specified value of a string.
const thisString = 'I am a software developer.'

console.log(thisString.lastIndexOf('software'))   // 7
console.log(thisString.lastIndexOf('am'))  // 2


// match() : This method searches a string for a match against the regular expression and return the matches. if its more than one match, it return an array.
const thisString = 'I am a software developer.'

console.log(thisString.match(/e/g))   // ['e', 'e', 'e', 'e']
console.log(thisString.match(/o/g))  // ['o', 'o']


// repeat() : This method returns a new string with a specified number of copies of an existing string.
const thisString = 'Hire me'

console.log(thisString.repeat(3)) // Hire meHire meHire me


// replace() : This method searches a string for a specified value or regular expression and returns a new string where the specified values are.
const thisString = 'I am a software developer.'

console.log(thisString.replace(/software/g , 'SOFTWARE'))   // I am a SOFTWARE developer.
console.log(thisString.replace(/developer/g , 'DEVELOPER'))  // I am a software DEVELOPER.


// search() : This method searches a string for a specified value or regular expression and return the position of the match.
const thisString = 'I am a software developer.'

console.log(thisString.search('developer'))   // 16
console.log(thisString.search('am'))  // 2


// slice() : This method extracts a part of a string and returns a new string.
const thisString = 'I am a software developer.'

console.log(thisString.slice(2 , 4))   // am
console.log(thisString.slice(10 , 14)) // twar

// split() : This method splits a string into sub string and returns an array.
const thisString = 'Hire me!'

console.log(thisString.split(''))  // ['H', 'i', 'r', 'e', ' ', 'm', 'e', '!'] 
console.log(thisString.split(' '))  // ['Hire', 'me!']

// startsWith() : This method returns a boolean if a string starts with a specified character.
const thisString = 'Hire me!'

console.log(thisString.startsWith('me'))  // false
console.log(thisString.startsWith('Hire'))  // true


// subString() : This method extracts the character from a string beginning at a specified start position.
const thisString = 'I am a software developer.'

console.log(thisString.substring(2 , 4))   // am
console.log(thisString.substring(10 , 14)) // twar

// toLowerCase() : This method returns the string in lower case.
const thisString = 'I am a software developer.'

console.log(thisString.toLowerCase())   // i am a software developer.


// toUpperCase() : This method returns the string in upper case.
const thisString = 'I am a software developer.'

console.log(thisString.toUpperCase())   // I AM A SOFTWARE DEVELOPER.


// trim() : This method removes whitespaces from either sides of the string.
const thisString = '  I am a software developer.  '

console.log(thisString.trim())   // I am a software developer.




