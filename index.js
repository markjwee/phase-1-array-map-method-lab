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

function titleCased(array) {
  let titleCasedArray = []
  titleCasedArray = array.map(titleCaseString(element) => {
    Object.assign({}, array)
  });
  return titleCasedArray;
}

// function titleCased(array) {
//   let updatedArray = []
//   updatedArray = map(titleCaseString(array))
//   return updatedArray;
// }

function titleCaseString(string) {
  let titleCasedString = ""
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  titleCasedString = words.join(" ");
  return titleCasedString;
}

// const titleCased = (array) => {
//   array.map(word => ({
//     for (const i in word) {
//       word[i].toUpperCase()
//     })
// }
//   return array
// }

function titleCased(arrayOfStrings) {
  let titleCasedString = [...arrayOfStrings]
  for (const string of array => (array.toLowerCase().split(" ").map(function (string) {
      return string[0].toUpperCase() + word.substring(1).join(" ");
    })))
  return titleCasedString
}

myStr.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');