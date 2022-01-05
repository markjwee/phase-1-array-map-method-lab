function titleCased(array) {
  const titleCasedArray = array.map(titleCaseString)
  return titleCasedArray;
}

function titleCaseString(string) {
  let titleCasedString = ""
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  titleCasedString = words.join(" ");
  return titleCasedString;
}