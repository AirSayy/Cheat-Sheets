// String Methods in JavaScript


// charAt() : Returns a character at a specified index/position.
const thisString = 'I am a software developer'
console.log(thisString.charAt(0))  //"I"
console.log(thisString.charAt(3))  //"m"


// charCodeAt() : Returns a unicode of the character at a specific index
const thisString = 'I am a software developer'
console.log(thisString.charCodeAt(0))  //73
console.log(thisString.charCodeAt(3))  //109


// concat : Joins two or more strings and returns a new string
const thisString = 'I am a software developer.'
const secondString = 'Hire me'

console.log(thisString.concat(secondString))  // I am a software developer.Hire me


// endsWith : Checks if a string ends with a specified string or character
const thisString = 'I am a software developer.'

console.log(thisString.endsWith('software'))   //false
console.log(thisString.endsWith('developer.'))   //true


