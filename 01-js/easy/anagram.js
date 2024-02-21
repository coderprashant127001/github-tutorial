/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

//solution 1
// function sortString(inputString) {
//   let charArray = inputString.split('');
//   charArray.sort();
//   let sortedString = charArray.join('');

//   return sortedString;
// }
// function isAnagram(str1, str2) {

//   let x = sortString(str1.toUpperCase() );
//   let y = sortString(str2.toUpperCase() );
//   return x==y;

  
// }

//solution 2 -- cant find
function isAnagram(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let myMap = {};


  for(let i of str1){
    
  }
  
  console.log(myMap);
  
  for(let i of str2){
    
  }
  

  
  
  for(let [key, value] in myMap){
    // console.log(key, value);
    if(myMap[key] !== 0)
      // console.log(key, value);
      return false;
  }
  return true;
  
}

isAnagram("rail safety", "fairy tales")

module.exports = isAnagram;
