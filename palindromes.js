// Palindromes

function isPalindrome(word){
    let right = word.length - 1;
    for (let left = 0; left < Math.floor(word.length / 2); left++){
        if (word[left] !== word[right]) {
            return false;
        }
        right --;
    }
    return true;
}

console.log("eye is a palindrome", isPalindrome("eye"))
console.log("eye is a palindrome", isPalindrome("dog"));
