window.onload = function() {
  // console.log("onload is working");
   function verifyNum(cardNum) {
    if (cardNum.length === 16) {
    // console.log("This card number is valid!!!");
    return true;
  } else {
    // console.log("this card number is NOT valid!");
    return false;
  }
  removes any non-digit characters from the card number
  const digitsOnly = cardNum.replace(/\D/g, '');
  console.log("Nan");
  // converts the string to an array
  const digitsArray = Array.from(digitsOnly, Number);
  console.log("to an array");

  // moves backwards through the array by 2
 for (let i = digitsArray.length -2; i >= 0; i -= 2) {
  let doubledDigit = digitsArray[i] * 2;
  if (doubledDigit > 9) {
  // console.log("moved backward by 2");
  }
 }
} 


}
