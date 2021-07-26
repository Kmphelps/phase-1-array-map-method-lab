const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials
//}

const titleCased = () => { // creates a function called titleCased
  
  return tutorials.map(function (tutorial) { // .map transforms every element in an array to another value and then returns a new array
    let splitStrings = tutorial.split(" "); // divides each string into an ordered list of substrings and returns an array
    
    return splitStrings.map(function (splitString) { // starts another function 
      let capitalizedStrings = splitString.charAt(0).toUpperCase() + splitString.substr(1).toLowerCase(); // takes each of the substrings and capitalizes the first letter and assigns them to a variable
      
      
      
      return capitalizedStrings;

    });
    
    
  });
}



  
  
  





