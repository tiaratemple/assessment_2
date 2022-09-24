///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((preValue, curValue) => {
    return preValue + curValue.price
}, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const  taxAmt = cartTotal * tax
    let total = cartTotal + taxAmt - couponValue
    return total 
}
console.log(calcFinalPrice(summedPrice, 4, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Customer properties would need a name, phone number, address, method of payment.
    The restaurant needs to know who is ordering, a way to contact them, an address for delivery, and money.
    Name = string because it is text of letters
    Phone number = number because it is a number
    Address = string because it is alpha and numeric characters
    Method of Payment = object because it has multiple values like name, card number, etc.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Tiara",
    phoneNumber: 555200777,
    address: "123 Sesame Street, Dallas, TX 55555",
    methodOfPayment: {
        NameOnCard: "Tiara Temple",
        cardNumber: 123456789101,
        cvv: 000,
        expdate: "01/24"
    }
    
} 