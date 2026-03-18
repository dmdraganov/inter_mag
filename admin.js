// Админ панель - общая статистика
function renderAdminStats() { // Рендер общей статистики
    const stats = getProductStats(); // Получаем статистику товаров
    const currentProducts = safeJsonParse(localStorage.getItem('products'), products); // Текущие товары
    const orders = safeJsonParse(localStorage.getItem('orderHistory'), []); // История заказов
    
    document.getElementById('totalProducts').textContent = products.length; // Всего товаров
    
    let totalOrdered = 0;  // Товары в активных заказах (Новый, В обработке)
    let totalPurchased = 0; // Товары в подтвержденных заказах (Подтверждён, Доставлен)
    let totalInCart = 0; // Всего в корзинах
    let totalInFavorites = 0; // Всего в избранном
    let totalStock = 0; // Всего на складе
    let lowStock = 0; // Мало на складе
    let outOfStock = 0; // Нет в наличии
    
    // Подсчет товаров в заказах по статусам
    orders.forEach(order => { // Перебор заказов
        const status = order.status || 'Новый'; // Статус заказа
        order.items.forEach(item => { // Перебор товаров
            if (status === 'Новый' || status === 'В обработке') { // Активные
                totalOrdered += item.quantity; // Считаем активные
            } else if (status === 'Подтверждён' || status === 'Отправлен' || status === 'Доставлен') { // Подтвержденные
                totalPurchased += item.quantity; // Считаем купленные
            }
            // Отменённые заказы не учитываем
        }); // Конец перебора товаров
    }); // Конец перебора заказов
    
    // Статистика из корзин и избранного
    Object.values(stats).forEach(stat => { // Перебор статистики
        totalInCart += stat.inCart || 0; // Сумма по корзинам
        totalInFavorites += stat.inFavorites || 0; // Сумма по избранному
    }); // Конец статистики
    
    // Статистика склада
    currentProducts.forEach(product => { // Перебор товаров
        const stock = product.stock || 0; // Остаток
        totalStock += stock; // Сумма остатков
        
        if (stock === 0) { // Нет в наличии
            outOfStock++; // Увеличиваем счетчик
        } else if (stock < 10) { // Мало на складе
            lowStock++; // Увеличиваем счетчик
        }
    }); // Конец перебора товаров
    
    document.getElementById('totalOrdered').textContent = totalOrdered; // Заполняем активные
    document.getElementById('totalPurchased').textContent = totalPurchased; // Заполняем купленные
    document.getElementById('totalStock').textContent = totalStock; // Заполняем склад
    document.getElementById('lowStock').textContent = lowStock; // Заполняем мало
    document.getElementById('outOfStock').textContent = outOfStock; // Заполняем нет
    document.getElementById('totalInCart').textContent = totalInCart; // Заполняем корзины
    document.getElementById('totalInFavorites').textContent = totalInFavorites; // Заполняем избранное
} // Конец renderAdminStats

document.addEventListener('DOMContentLoaded', () => { // Инициализация
    renderAdminStats(); // Рендер статистики
}); // Конец обработчика