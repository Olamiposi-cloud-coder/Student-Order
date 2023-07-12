// JavaScript code

// Function to handle adding items to the cart
function addToCart(event) {
  // Get the menu item details
  const menuItem = event.target.parentNode;
  const title = menuItem.querySelector('h3').textContent;
  const price = menuItem.querySelector('.price').textContent;

  // Create a new cart item
  const cartItem = document.createElement('li');
  cartItem.textContent = `${title} - ${price}`;

  // Add the cart item to the cart
  const cartItems = document.querySelector('.cart-items');
  cartItems.appendChild(cartItem);
}

// Function to handle placing an order
function placeOrder(event) {
  // Get the delivery options
  const deliveryOptions = document.getElementsByName('delivery');
  let deliveryType;
  for (const option of deliveryOptions) {
    if (option.checked) {
      deliveryType = option.value;
      break;
    }
  }

  // Get the delivery address
  let address;
  if (deliveryType === 'delivery') {
    address = document.querySelector('.address-field').value;
  }

  // Get the payment method
  const paymentOptions = document.getElementsByName('payment');
  let paymentMethod;
  for (const option of paymentOptions) {
    if (option.checked) {
      paymentMethod = option.value;
      break;
    }
  }

  // Perform the order placement logic here (e.g., send data to a server)

  // Show a success message
  alert('Order placed successfully!');

  // Clear the cart
  const cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = '';

  // Reset the delivery address field
  if (address) {
    document.querySelector('.address-field').value = '';
  }
}

// Add event listeners to the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

// Add event listener to the "Place Order" button
const placeOrderButton = document.querySelector('.place-order');
placeOrderButton.addEventListener('click', placeOrder);
