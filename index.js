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

const titleCased = () => {
  return tutorials.map(function(tutorial) {
    let words = tutorial.split(" ");//split strings into arrays of words
    let titleCasedWords = words.map(function(word) {
      return word[0].toUpperCase() + word.slice(1); //first letter of each word is extracted and uppercased, added to rest of word
    });
    return titleCasedWords.join(" ");//unsplit word arrays back into original strings
  });
}
