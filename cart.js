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
    // Рендер строк — добавишь в ПОРЦИИ 4
}
  
document.addEventListener('DOMContentLoaded', () => { renderCart(); });