function calculateTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.id);
        return total + (product.price * item.quantity);
    }, 0);
}
  
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCart();
    updateBadges();
}
function renderCart() {
    const cart    = getCart();
    const tbody   = document.getElementById('cartTableBody');
    const emptyMsg = document.getElementById('emptyCart');
    const table   = document.querySelector('.cart-table');
    const totalDiv = document.querySelector('.cart-total');

    if (cart.length === 0) {
        tbody.innerHTML = '';
        emptyMsg.style.display = 'block';
        table.style.display    = 'none';
        totalDiv.style.display = 'none';
        return;
    }
    emptyMsg.style.display = 'none';
    table.style.display    = 'table';
    totalDiv.style.display = 'block';
    tbody.innerHTML = cart.map((item, index) => {
        const product = products.find(p => p.id === item.id);
        const sum = product.price * item.quantity;
        return `<tr>
            <td>${index + 1}</td>
            <td>${product.image} ${product.name}</td>
            <td>${product.price.toLocaleString('ru-RU')} ₽</td>
            <td>
                <button onclick="updateQuantity(${product.id},-1)">−</button>
                ${item.quantity}
                <button onclick="updateQuantity(${product.id}, 1)">+</button>
            </td>
            <td>${sum.toLocaleString('ru-RU')} ₽</td>
            <td>
                <button onclick="removeFromCart(${product.id})"
                        class="btn-remove">✕</button>
            </td>
        </tr>`;
    }).join('');
    document.getElementById('totalPrice').textContent =
    calculateTotal().toLocaleString('ru-RU');

}

function updateQuantity(productId, delta) {
    let cart = getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0)
            cart = cart.filter(i => i.id !== productId);
        saveCart(cart);
        renderCart();
        updateBadges();
    }
}

document.addEventListener('DOMContentLoaded', () => { renderCart(); });