let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('cart').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

function checkout() {
    alert('Obrigado pela sua compra! 🚀');
    cart = [];
    total = 0;
    updateCart();
    toggleCart();
}
