// contacts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    if (!form) return; // если формы нет, ничего не делаем

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // отменяем стандартную отправку

        // Очищаем предыдущие ошибки
        clearErrors();

        // Получаем поля
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');

        let isValid = true;

        // Валидация имени
        if (!name.value.trim()) {
            showError(name, 'Имя обязательно');
            isValid = false;
        }

        // Валидация email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email обязателен');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Введите корректный email');
            isValid = false;
        }

        // Валидация телефона (необязательное поле, но если заполнено, проверяем формат)
        if (phone.value.trim()) {
            const phoneRegex = /^\+?[0-9\s\-\(\)]+$/; // простая проверка на допустимые символы
            if (!phoneRegex.test(phone.value.trim())) {
                showError(phone, 'Введите корректный номер телефона');
                isValid = false;
            }
        }

        // Валидация сообщения
        if (!message.value.trim()) {
            showError(message, 'Сообщение обязательно');
            isValid = false;
        }

        // Если всё валидно, можно отправить форму (например, через AJAX или обычный submit)
        if (isValid) {
            // Здесь можно отправить данные через fetch или разрешить стандартную отправку
            // Для примера просто выведем сообщение и сбросим форму
            alert('Форма успешно отправлена!');
            form.reset();
            // Если нужна реальная отправка, можно использовать form.submit() или fetch
        }
    });

    // Функция для отображения ошибки
    function showError(input, message) {
        // Ищем контейнер для ошибки, если есть, иначе создаём
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }
        errorElement.textContent = message;
        input.classList.add('invalid');
    }

    // Функция для очистки ошибок
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        const invalidInputs = document.querySelectorAll('.invalid');
        invalidInputs.forEach(input => input.classList.remove('invalid'));
    }
});