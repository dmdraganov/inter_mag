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
            document.getElementById('checkoutForm')
           .addEventListener('submit', function(e) {
       e.preventDefault();
       const fullName = document.getElementById('fullName').value.trim();
       const phone    = document.getElementById('phone').value.trim();
       const email    = document.getElementById('email').value.trim();
       const city     = document.getElementById('city').value.trim();
       const street   = document.getElementById('street').value.trim();
  
       if (!fullName || !phone || !email || !city || !street) {
           alert('Заполните все обязательные поля'); return;
       }
       if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
           alert('Неверный формат email'); return;
       }
  
       const cart = getCart();
       const order = {
           id:      Date.now(),
           date:    new Date().toLocaleDateString('ru-RU'),
           status:  'Новый',
           address: city + ', ' + street,
           items:   cart.map(item => {
               const p = products.find(x => x.id === item.id);
               return { name: p.name, image: p.image,
                        price: p.price, quantity: item.quantity };
           })
       };
       const orders = JSON.parse(localStorage.getItem('orders') || '[]');
       orders.push(order);
       localStorage.setItem('orders', JSON.stringify(orders));
       saveCart([]);           // очистить корзину
       updateBadges();
       alert('Заказ #' + order.id + ' оформлен! Спасибо!');
       window.location.href = 'profile.html';
   });