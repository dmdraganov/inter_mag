function renderOrderSummary() {
    const cart = getCart();
    const summaryDiv = document.getElementById('orderSummary');

    if (cart.length === 0) {
        window.location.href = 'cart.html'; return;
        }
        summaryDiv.innerHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return `<div class="summary-item">
            <span>${product.image} ${product.name}</span>
            <span>${item.quantity} × ${product.price.toLocaleString('ru-RU')} ₽</span>
            <span>${(product.price * item.quantity).toLocaleString('ru-RU')} ₽</span>
            </div>`;
        }).join('');
        const subtotal = cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return sum + product.price * item.quantity; }, 0);
            summaryDiv.innerHTML += `<h3>Итого: ${subtotal.toLocaleString('ru-RU')} ₽</h3>`;
            }
            document.addEventListener('DOMContentLoaded', renderOrderSummary);