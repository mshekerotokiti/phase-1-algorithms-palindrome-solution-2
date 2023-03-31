//function isPalindrome(word) {
  // Write your algorithm here
//   I need to make an isPalindrome function that returns either true or false. When the input string is the same forwards and backwards, I should return true. That means if the first letter is the same as the last letter, and the second letter is the same as the second to last letter.
//}

/* 
  Add your pseudocode here

  iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
*/


  // Add written explanation of your solution here

  function isPalindrome(string) {

    // find the length of a string
    const len = string.length; 
    i // first index
    const j = len -1 - i; //end index

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string indexes are same
        //if letters don't match
        if (string[i] !== string[j]) {
            return false;
        }
    }
    //if letters match
    return true
    }



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

 // console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("ab");
isPalindrome("robot");
isPalindrome("a");