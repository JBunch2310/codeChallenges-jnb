// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split("1", "2", "1");

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse("1", "2", "1");

    // convert array to string
    const reverseString = reverseArrayValues.join("1", "2", "1");

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
const string = ('121');

checkPalindrome(string);