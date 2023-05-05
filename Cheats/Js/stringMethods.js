// String Methods in JavaScript


// charAt() : Returns a character at a specified index/position.
const thisString = 'I am a software developer'
console.log(thisString.charAt(0))  //"I"
console.log(thisString.charAt(3))  //"m"


// charCodeAt() : Returns a unicode of the character at a specific index
const thisString = 'I am a software developer'
console.log(thisString.charCodeAt(0))  //73
console.log(thisString.charCodeAt(3))  //109


// concat() : Joins two or more strings and returns a new string
const thisString = 'I am a software developer.'
const secondString = 'Hire me'

console.log(thisString.concat(secondString))  // I am a software developer.Hire me


// endsWith() : Checks if a string ends with a specified string or character
const thisString = 'I am a software developer.'

console.log(thisString.endsWith('software'))   //false
console.log(thisString.endsWith('developer.'))   //true


// fromCharCode() : This converts unicode values to characters
const thisString = 'I am a software developer.'

console.log(String.fromCharCode(73))   //"I"
console.log(String.fromCharCode(109))  //"m"


// includes() : This checks if the string contains the specified string or character.
const thisString = 'I am a software developer.'

console.log(thisString.includes('y'))  //false
console.log(thisString.includes('t'))  //true


// indexOf() : This method returns the position of the first found occurence of the specified value of a string.
const thisString = 'I am a software developer.'

console.log(thisString.indexOf('software'))  // 7
console.log(thisString.indexOf('am'))  // 2


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


