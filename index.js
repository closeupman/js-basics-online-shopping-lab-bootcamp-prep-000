var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 //random num from 1 to 100
 let itemPrice = Math.floor((Math.random()*100)+1)
 // create new object and set key/value
 var newObj = {[item]:itemPrice};
 // put the new object in the cart
 cart.push(newObj);
 // let the user know it has been done
 console.log(`${item} has been added to your cart.`);
 //return the cart
 return cart;
}

function viewCart() {
  let message = '';
  // write your code here
  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    if (cart.length == 1) { // cart has 1 item
      let key0 = Object.keys(cart[0])[0];
      message += `In your cart, you have ${key0} at $${cart[0][key0]}.`;
    } else if (cart.length == 2) { // cart has 2 items
      let key0 = Object.keys(cart[0])[0];
      let key1 = Object.keys(cart[1])[0];
      message += `In your cart, you have ${key0} at $${cart[0][key0]} and ${key1} at $${cart[1][key1]}.`;
    } else {
      message += 'In your cart you have ';
      for (let i=0; i < cart.length; i++) {
        let currentKey = Object.keys(cart[i])[0];

        if (i < cart.length-1) {
          message += `${currentKey} at $${cart[i][currentKey]}, `
        } else {
          message += `and ${currentKey} at $${cart[i][currentKey]}.`
        }
      }
    } // end multiitem cart
  } // end else cart not empty
  console.log(message);
  return cart;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
