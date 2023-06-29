Description: cardVerify()

Test: It should return true if the input is 16 numbers." Code: let card = "0998445533334452"; cardVerify(); Expected Output: "This card number is valid."

Test: "It should return false if the input is not 16 numbers." Code: let card = "16468534223"; cardVerify(); Expected Output:"This card number is not valid."

Test: "It should return 'nan' if there are characters that are not numbers included"
Code: "16468534223"; cardNum();
Expected Output: "NaN"

Description: luhnAlg()

Test: "It should create a new set of numbers by transforming each digit in the inputted card number." Code: let card = "4102 0808 8043 5620"; luhnAlg(); Expected Output: "4204 0707 8046 5320"

