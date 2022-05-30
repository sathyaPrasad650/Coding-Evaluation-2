
function checkoutAlert(event) {
    event.preventDefault()
    // Your order is accepted 
    setTimeout(() => {
        alert('Your order is accepted')
    }, 0);

    // Your order is being Prepared 
    setTimeout(() => {
        alert('Your order is being Prepared')
    }, 3000);

    // Your order is being packed
    setTimeout(() => {
        alert('Your order is being packed')
    }, 8000);

    // Your order is out for delivery
    setTimeout(() => {
        alert('Your order is out for delivery')
    }, 10000);

    // Order delivered
    setTimeout(() => {
        alert('Order delivered')
    }, 12000);
}


