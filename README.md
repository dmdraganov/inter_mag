# react_mag1 TechStore Vanilla JS

http://q967394v.beget.tech/Inter_mag1/index.html

https://comanda7.github.io/react_mag1/

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![localStorage](https://img.shields.io/badge/Storage-localStorage-22c55e)](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

> Полноценный многостраничный интернет-магазин электроники на **чистом Vanilla JS без фреймворков, без сборщиков**.  
> Все данные хранятся в `localStorage`; синхронизация страниц происходит без сервера.
>
> **GitHub:** https://github.com/Comanda7/react_mag1

---

## Стек технологий

| Слой             | Технология                                   |
| ---------------- | -------------------------------------------- |
| Разметка         | HTML5 (отдельный `.html` на каждую страницу) |
| Стили            | Vanilla CSS (один `styles.css`)              |
| Логика           | JavaScript ES6+ (модули через `<script>`)    |
| Хранилище данных | localStorage (CRUD в `data.js`)              |
| Сборщик/бандлер  | Не требуется                                 |
| Роутинг          | Обычные HTML-ссылки (`<a href="...">`)       |

---

## Структура проекта

```
TechStore/
  HTML страницы
    index.html  Каталог товаров (главная)
    favorites.html  Избранные товары
    cart.html  Корзина покупок
    checkout.html  Оформление заказа
    profile.html  Личный кабинет
    about.html  О нас
    contacts.html  Контакты

     Админ-панель
        admin.html  Общая статистика
        admin-products.html  Таблица всех товаров
        admin-orders.html  История заказов
        admin-categories.html  Статистика по категориям

  JavaScript модули
    data.js  Данные + CRUD для localStorage
    common.js  Шапка, бургер, счётчики
    catalog.js  Фильтры, поиск, пагинация
    favorites.js  Логика избранного
    cart.js  Логика корзины
    checkout.js  Оформление заказа
    profile.js  Личный кабинет
    auth.js  Регистрация и авторизация
    admin.js  Статистика админки
    admin-products.js  Таблица товаров
    admin-orders.js  Таблица заказов
    admin-stock.js  Остатки на складе
    admin-categories.js  Таблицы по категориям

  CSS
     styles.css  Все стили приложения
```

> Кликайте на имя файла ниже, чтобы увидеть его описание и код

---

## Описание файлов

### HTML страницы

<details>
<summary><a name="index-html"></a><b> index.html</b>  каталог товаров (главная страница)</summary>

---

Главная страница магазина. Отображает карточки товаров с фильтрацией, поиском и пагинацией.

**Подключает:** `data.js`, `common.js`, `catalog.js`

**Функции страницы:**

- Фильтрация по 3 категориям: телефоны, ноутбуки, аксессуары
- Живой поиск по названию в реальном времени
- Сортировка по цене (по возрастанию / убыванию)
- Пагинация 8 товаров на страницу
- Кнопки и прямо в карточке товара

```html
<!-- Боковая панель фильтров -->
<aside class="sidebar" id="sidebar">
  <h3>Категории</h3>
  <ul class="category-list">
    <li><a href="#" data-category="all" class="active">Все товары</a></li>
    <li><a href="#" data-category="phones">Сотовые телефоны</a></li>
    <li><a href="#" data-category="laptops">Ноутбуки</a></li>
    <li><a href="#" data-category="accessories">Аксессуары</a></li>
  </ul>
  <div class="filters">
    <h3>Фильтры</h3>
    <div class="form-group">
      <label for="search">Поиск:</label>
      <input type="text" id="search" placeholder="Введите название..." />
    </div>
    <div class="form-group">
      <label for="sort">Сортировка:</label>
      <select id="sort">
        <option value="">По умолчанию</option>
        <option value="asc">Цена: по возрастанию</option>
        <option value="desc">Цена: по убыванию</option>
      </select>
    </div>
  </div>
</aside>

<!-- Сетка товаров и пагинация -->
<div class="content">
  <h2>Каталог товаров</h2>
  <div class="products-grid" id="productsGrid"></div>
  <div class="pagination" id="pagination"></div>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="catalog.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="favorites-html"></a><b> favorites.html</b>  список избранных товаров</summary>

---

Страница с товарами, добавленными в избранное.

**Подключает:** `data.js`, `common.js`, `favorites.js`

**Функции страницы:**

- Отображение сетки сохранённых товаров
- Удаление товара из избранного
- Быстрое добавление в корзину без перехода в каталог

```html
<!-- Основной контент -->
<div class="content">
  <h2>Избранное</h2>
  <div class="products-grid" id="favoritesGrid"></div>
  <p class="empty-message" id="emptyFavorites" style="display: none;">
    Список избранного пуст
  </p>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="favorites.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="cart-html"></a><b> cart.html</b>  корзина покупок</summary>

---

Страница корзины с таблицей выбранных товаров.

**Подключает:** `data.js`, `common.js`, `cart.js`

**Функции страницы:**

- Таблица товаров с изображениями и ценами
- Кнопки **+** / \*\*\*\* для изменения количества
- Удаление отдельных позиций
- Автоматический пересчёт итоговой суммы
- Кнопка Оформить заказ переход на `checkout.html`

```html
<!-- Таблица корзины -->
<div class="cart-container">
  <table class="cart-table" id="cartTable">
    <thead>
      <tr>
        <th>№</th>
        <th>Наименование</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Сумма</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody id="cartTableBody"></tbody>
  </table>
  <div class="cart-total">
    <h3>Общая сумма: <span id="totalPrice">0</span> ₽</h3>
    <a href="checkout.html" class="btn btn-primary" id="checkoutBtn"
      >Оформить заказ</a
    >
  </div>
</div>
<p class="empty-message" id="emptyCart" style="display: none;">Корзина пуста</p>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="cart.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="checkout-html"></a><b> checkout.html</b>  оформление заказа</summary>

---

Страница оформления заказа с формой данных доставки.

**Подключает:** `data.js`, `common.js`, `checkout.js`

**Функции страницы:**

- Форма с полями: имя, телефон, адрес доставки
- Просмотр итоговой суммы перед подтверждением
- Сохранение заказа в `localStorage` переход в профиль

```html
<!-- Форма оформления заказа -->
<div class="checkout-form-section">
  <h3>Данные покупателя</h3>
  <form id="checkoutForm" class="checkout-form">
    <div class="form-group">
      <label for="fullName">ФИО *</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        required
        placeholder="Иванов Иван Иванович"
      />
    </div>
    <div class="form-group">
      <label for="phone">Телефон *</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        required
        placeholder="+7 (___) ___-__-__"
      />
    </div>
    <div class="form-group">
      <label for="email">Email *</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="example@mail.ru"
      />
    </div>
  </form>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="checkout.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="profile-html"></a><b> profile.html</b>  личный кабинет</summary>

---

Личный кабинет авторизованного пользователя.

**Подключает:** `data.js`, `common.js`, `profile.js`

**Функции страницы:**

- История всех оформленных заказов с детализацией по товарам
- Список товаров в избранном
- Текущее содержимое корзины
- Кнопка выхода из аккаунта

```html
<!-- Разделы личного кабинета -->
<div class="profile-content">
  <div class="profile-section">
    <h3>История заказов</h3>
    <div id="orderHistory">
      <p class="empty-message">История заказов пуста</p>
    </div>
  </div>
  <div class="profile-section">
    <h3>Избранные товары (<span id="profileFavCount">0</span>)</h3>
    <div class="products-grid" id="profileFavorites"></div>
  </div>
  <div class="profile-section">
    <h3>Текущая корзина</h3>
    <div id="profileCart">
      <p class="empty-message">Корзина пуста</p>
    </div>
  </div>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="profile.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="about-html"></a><b>ℹ about.html</b>  о нас</summary>

---

Статичная информационная страница.

**Подключает:** `common.js`

Содержит: описание магазина, преимущества, статистику (товаров, брендов, клиентов).

```html
<!-- Контент страницы «О нас» -->
<div class="about-content">
  <p>Добро пожаловать в TechStore - ваш надежный партнер в мире электроники!</p>
  <p>
    Мы предлагаем широкий ассортимент качественной техники по доступным ценам:
  </p>
  <ul>
    <li>Сотовые телефоны от ведущих производителей</li>
    <li>Ноутбуки для работы и развлечений</li>
    <li>Аксессуары для ваших устройств</li>
  </ul>
  <p>Наши преимущества:</p>
  <ul>
    <li>✓ Гарантия качества на всю продукцию</li>
    <li>✓ Быстрая доставка по всей России</li>
    <li>✓ Профессиональная консультация</li>
    <li>✓ Доступные цены</li>
  </ul>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="common.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="contacts-html"></a><b> contacts.html</b>  контакты</summary>

---

Страница контактной информации.

**Подключает:** `common.js`

Содержит: адрес, телефон, email, форму обратной связи.

```html
<!-- Контактная информация -->
<div class="contacts-content">
  <div class="contact-item">
    <h3>Адрес:</h3>
    <p>г. Москва, ул. Примерная, д. 123</p>
  </div>
  <div class="contact-item">
    <h3>Телефон:</h3>
    <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
  </div>
  <div class="contact-item">
    <h3>Email:</h3>
    <p><a href="mailto:info@techstore.ru">info@techstore.ru</a></p>
  </div>
  <div class="contact-item">
    <h3>Режим работы:</h3>
    <p>Пн-Пт: 9:00 - 20:00<br />Сб-Вс: 10:00 - 18:00</p>
  </div>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="common.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="admin-html"></a><b> admin.html</b>  дашборд администратора</summary>

---

Главная страница панели администратора с общей статистикой.

**Подключает:** `data.js`, `common.js`, `admin.js`

**Отображает:**

- Всего товаров в каталоге
- Количество заказанных позиций
- Товаров в корзинах пользователей
- Товаров в избранном

```html
<!-- Статистические карточки -->
<div class="admin-stats">
  <div class="stat-card">
    <h3>Всего товаров</h3>
    <p class="stat-value" id="totalProducts">0</p>
  </div>
  <div class="stat-card">
    <h3>Заказано товаров</h3>
    <p class="stat-value" id="totalOrdered">0</p>
  </div>
  <div class="stat-card">
    <h3>В корзинах</h3>
    <p class="stat-value" id="totalInCart">0</p>
  </div>
  <div class="stat-card">
    <h3>В избранном</h3>
    <p class="stat-value" id="totalInFavorites">0</p>
  </div>
  <div class="stat-card warning">
    <h3>Товары заканчиваются</h3>
    <p class="stat-value" id="lowStock">0</p>
  </div>
  <div class="stat-card danger">
    <h3>Нет в наличии</h3>
    <p class="stat-value" id="outOfStock">0</p>
  </div>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="admin.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="admin-products-html"></a><b> admin-products.html</b>  управление товарами</summary>

---

Детальная таблица всех товаров магазина.

**Подключает:** `data.js`, `common.js`, `admin-products.js`

**Функции:** полная таблица с ID, названием, категорией, ценой, статистикой продаж.

```html
<!-- Таблица товаров -->
<div class="admin-table-container">
  <table class="admin-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Название товара</th>
        <th>Категория</th>
        <th>Цена</th>
        <th>В корзине</th>
        <th>В избранном</th>
        <th>Заказано</th>
        <th>Куплено</th>
      </tr>
    </thead>
    <tbody id="adminTableBody"></tbody>
  </table>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="admin-products.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="admin-orders-html"></a><b> admin-orders.html</b>  история заказов</summary>

---

Полная история заказов всех пользователей.

**Подключает:** `data.js`, `common.js`, `admin-orders.js`

**Функции:** таблица заказов с датой, пользователем, составом и суммой.

```html
<!-- Контейнер для рендера заказов (заполняется через admin-orders.js) -->
<div id="ordersContainer"></div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="admin-orders.js"></script>
<script src="common.js"></script>
<script src="auth.js"></script>
```

---

</details>

<details>
<summary><a name="admin-categories-html"></a><b> admin-categories.html</b>  категории</summary>

---

Три отдельные таблицы по категориям товаров.

**Подключает:** `data.js`, `common.js`, `admin-categories.js`

**Разделы:** Телефоны Ноутбуки Аксессуары

```html
<!-- Три таблицы по категориям -->
<div class="category-section">
  <h3>Сотовые телефоны</h3>
  <div class="admin-table-container">
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th>В корзине</th>
          <th>В избранном</th>
          <th>Заказано</th>
        </tr>
      </thead>
      <tbody id="phonesTable"></tbody>
    </table>
  </div>
</div>

<div class="category-section">
  <h3>Ноутбуки</h3>
  <div class="admin-table-container">
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th>В корзине</th>
          <th>В избранном</th>
          <th>Заказано</th>
        </tr>
      </thead>
      <tbody id="laptopsTable"></tbody>
    </table>
  </div>
</div>

<div class="category-section">
  <h3>Аксессуары</h3>
  <div class="admin-table-container">
    <table class="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Цена</th>
          <th>В корзине</th>
          <th>В избранном</th>
          <th>Заказано</th>
        </tr>
      </thead>
      <tbody id="accessoriesTable"></tbody>
    </table>
  </div>
</div>

<!-- Подключаемые скрипты -->
<script src="data.js"></script>
<script src="admin-categories.js"></script>
<script src="auth.js"></script>
```

---

</details>

---

### JavaScript модули

<details>
<summary><a name="data-js"></a><b> data.js</b>  центральный модуль данных</summary>

---

Ядро приложения. Содержит все данные и функции работы с `localStorage`.

**Данные:** массив из **60 товаров** (по 20 в каждой категории). Каждый товар: `id`, `name`, `category`, `price`, `image`, `stock`.

```js
const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "phones",
    price: 129990,
    image: "",
    stock: 15,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    category: "phones",
    price: 89990,
    image: "",
    stock: 20,
  },
  // ...
  {
    id: 21,
    name: 'MacBook Pro 16"',
    category: "laptops",
    price: 249990,
    image: "",
    stock: 8,
  },
  // ...
  {
    id: 41,
    name: "AirPods Pro 2",
    category: "accessories",
    price: 24990,
    image: "",
    stock: 50,
  },
  // ...60 позиций
];

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}
function saveCart(c) {
  localStorage.setItem("cart", JSON.stringify(c));
}
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}
function saveFavorites(f) {
  localStorage.setItem("favorites", JSON.stringify(f));
}
function getOrderHistory() {
  return JSON.parse(localStorage.getItem("orderHistory") || "[]");
}
```

**CRUD-функции:**

| Функция                                    | Описание                      |
| ------------------------------------------ | ----------------------------- |
| `getProducts()`                            | Получить все товары           |
| `getCart()` / `saveCart()`                 | Читать / сохранять корзину    |
| `getFavorites()` / `saveFavorites()`       | Читать / сохранять избранное  |
| `getOrderHistory()` / `saveOrder()`        | Читать / добавить заказ       |
| `getProductStats()` / `saveProductStats()` | Читать / сохранять статистику |

---

</details>

<details>
<summary><a name="common-js"></a><b> common.js</b>  общий код для всех страниц</summary>

---

Подключается на каждой странице. Отвечает за общие UI-элементы: шапка, счётчики, бургер-меню, кнопка выхода.

```js
function updateBadges() {
  const cart = getCart();
  const favorites = getFavorites();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartBadge = document.getElementById("cartBadge");
  const favBadge = document.getElementById("favBadge");

  if (cartBadge) cartBadge.textContent = cartCount > 0 ? cartCount : "";
  if (favBadge)
    favBadge.textContent = favorites.length > 0 ? favorites.length : "";
}

function createProductCard(product) {
  const isFav = getFavorites().includes(product.id);
  return `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <h3>${product.name}</h3>
            <p class="product-price">${product.price.toLocaleString("ru-RU")} ₽</p>
            <div class="product-actions">
                <button onclick="toggleFavorite(${product.id})">${isFav ? "" : ""}</button>
                <button onclick="addToCart(${product.id})"> В корзину</button>
            </div>
        </div>
    `;
}
```

---

</details>

<details>
<summary><a name="catalog-js"></a><b> catalog.js</b>  логика каталога</summary>

---

Вся бизнес-логика главной страницы: фильтрация, поиск, сортировка, пагинация (8 шт./стр.), рендер карточек через `innerHTML`.

```js
let currentPage = 1;
const itemsPerPage = 8;
let currentCategory = "all";
let searchQuery = "";
let sortOrder = "";

function getFilteredProducts() {
  let filtered = products;
  if (currentCategory !== "all")
    filtered = filtered.filter((p) => p.category === currentCategory);
  if (searchQuery)
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  if (sortOrder === "asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sortOrder === "desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = filtered.slice(start, start + itemsPerPage);
  document.getElementById("productsGrid").innerHTML = pageItems
    .map((p) => createProductCard(p))
    .join("");
  renderPagination(totalPages);
}
```

---

</details>

<details>
<summary><a name="auth-js"></a><b> auth.js</b>  аутентификация</summary>

---

Полная система авторизации через `localStorage`. Инжектирует модальное окно входа/регистрации в DOM через IIFE.

```js
(function () {
  function getUsers() {
    return JSON.parse(localStorage.getItem("auth_users") || "[]");
  }
  function getUser() {
    return JSON.parse(localStorage.getItem("auth_user") || "null");
  }
  function saveUser(u) {
    localStorage.setItem("auth_user", JSON.stringify(u));
  }

  function authLogin(email, password) {
    const found = getUsers().find(
      (u) => u.email === email && u.password === password,
    );
    if (!found) return "Неверный email или пароль";
    saveUser(found);
    return null;
  }

  function authRegister(name, email, password) {
    const users = getUsers();
    if (users.find((u) => u.email === email))
      return "Этот email уже зарегистрирован";
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    localStorage.setItem("auth_users", JSON.stringify(users));
    saveUser(newUser);
    return null;
  }

  function authLogout() {
    localStorage.removeItem("auth_user");
  }
})();
```

> Засев администратора (`admin@techstore.ru` / `admin123`) происходит при первом запуске.

---

</details>

<details>
<summary><a name="cart-js"></a><b> cart.js</b>  логика корзины</summary>

---

Управление содержимым корзины: рендер таблицы, кнопки `+`/``, удаление, пересчёт итога.

```js
function updateQuantity(productId, delta) {
  let cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter((i) => i.id !== productId);
    saveCart(cart);
    renderCart();
    updateBadges();
  }
}

function renderCart() {
  const cart = getCart();
  const tbody = document.getElementById("cartTableBody");
  if (!cart.length) {
    document.getElementById("emptyCart").style.display = "block";
    return;
  }
  tbody.innerHTML = cart
    .map((item, i) => {
      const p = products.find((p) => p.id === item.id);
      const sum = p.price * item.quantity;
      return `<tr>
            <td>${i + 1}</td><td>${p.name}</td>
            <td>${p.price.toLocaleString("ru-RU")} ₽</td>
            <td>
                <button onclick="updateQuantity(${p.id},-1)"></button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${p.id},+1)">+</button>
            </td>
            <td>${sum.toLocaleString("ru-RU")} ₽</td>
            <td><button onclick="removeFromCart(${p.id})"></button></td>
        </tr>`;
    })
    .join("");
  document.querySelector(".cart-total").textContent =
    "Итого: " + calculateTotal().toLocaleString("ru-RU") + " ₽";
}
```

---

</details>

<details>
<summary><a name="favorites-js"></a><b> favorites.js</b>  логика избранного</summary>

---

Отображает сетку товаров из избранного. При пустом списке заглушка. Использует `createProductCard` из `common.js`.

```js
function renderFavorites() {
  const favorites = getFavorites();
  const favoriteProducts = products.filter((p) => favorites.includes(p.id));
  const grid = document.getElementById("favoritesGrid");
  const emptyMsg = document.getElementById("emptyFavorites");

  if (!favoriteProducts.length) {
    grid.innerHTML = "";
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";
  grid.innerHTML = favoriteProducts.map((p) => createProductCard(p)).join("");
}

document.addEventListener("DOMContentLoaded", renderFavorites);
```

---

</details>

<details>
<summary><a name="checkout-js"></a><b> checkout.js</b>  оформление заказа</summary>

---

Отображает сводку корзины, маску телефона, обработку формы. После отправки сохраняет заказ в `localStorage`, очищает корзину.

```js
function handleCheckout(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const cart = getCart();

  const order = {
    id: Date.now(),
    date: new Date().toLocaleDateString("ru-RU"),
    status: "Новый",
    name: formData.get("name"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    items: cart.map((item) => {
      const p = products.find((p) => p.id === item.id);
      return {
        id: p.id,
        name: p.name,
        image: p.image,
        price: p.price,
        quantity: item.quantity,
      };
    }),
    total: calculateTotal(),
  };

  const orders = getOrderHistory();
  orders.push(order);
  localStorage.setItem("orderHistory", JSON.stringify(orders));
  saveCart([]);
  updateBadges();
  window.location.href = "profile.html";
}

// Маска для поля телефона: +7 (XXX) XXX-XX-XX
function formatPhoneNumber(input) {
  let v = input.value.replace(/\D/g, "");
  if (v[0] === "8") v = "7" + v.slice(1);
  if (v[0] !== "7") v = "7" + v;
  let fmt = "+7";
  if (v.length > 1) fmt += " (" + v.slice(1, 4);
  if (v.length >= 5) fmt += ") " + v.slice(4, 7);
  if (v.length >= 8) fmt += "-" + v.slice(7, 9);
  if (v.length >= 10) fmt += "-" + v.slice(9, 11);
  input.value = fmt;
}
```

---

</details>

<details>
<summary><a name="profile-js"></a><b> profile.js</b>  личный кабинет</summary>

---

Отображает данные пользователя, историю заказов с таблицами по каждому заказу, текущее избранное и корзину.

```js
function renderOrderHistory() {
  const orders = getOrderHistory();
  const container = document.getElementById("orderHistory");
  if (!orders.length) {
    container.innerHTML = '<p class="empty-message">История заказов пуста</p>';
    return;
  }
  container.innerHTML = [...orders]
    .reverse()
    .map(
      (order) => `
        <div class="order-item">
            <div class="order-header">
                <h4>Заказ #${order.id}</h4>
                <span class="order-date">${order.date}</span>
                <span class="order-status">${order.status || "Новый"}</span>
            </div>
            <table class="order-table">
                <thead><tr><th>№</th><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th></tr></thead>
                <tbody>
                    ${order.items
                      .map(
                        (item, i) => `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${item.image} ${item.name}</td>
                            <td>${item.price.toLocaleString("ru-RU")} ₽</td>
                            <td>${item.quantity}</td>
                            <td>${(item.price * item.quantity).toLocaleString("ru-RU")} ₽</td>
                        </tr>
                    `,
                      )
                      .join("")}
                </tbody>
            </table>
            <div class="order-total">Итого: <strong>${order.total.toLocaleString("ru-RU")} ₽</strong></div>
        </div>
    `,
    )
    .join("");
}
```

---

</details>

<details>
<summary><a name="admin-js"></a><b> admin.js / admin-*.js</b>  скрипты администратора</summary>

---

Пять отдельных скриптов для страниц администратора. Каждый читает данные из `localStorage` и рендерит HTML-таблицы.

| Файл                  | Страница              |
| --------------------- | --------------------- |
| `admin.js`            | Сводная статистика    |
| `admin-products.js`   | Таблица всех товаров  |
| `admin-orders.js`     | Таблица заказов       |
| `admin-stock.js`      | Остатки на складе     |
| `admin-categories.js` | Таблицы по категориям |

```js
// admin.js  сводная статистика
function renderAdminStats() {
  const stats = getProductStats();
  const orders = JSON.parse(localStorage.getItem("orderHistory") || "[]");
  let totalOrdered = 0,
    totalInCart = 0,
    totalInFavorites = 0;

  orders.forEach((order) => {
    order.items.forEach((item) => {
      totalOrdered += item.quantity;
    });
  });
  Object.values(stats).forEach((s) => {
    totalInCart += s.inCart || 0;
    totalInFavorites += s.inFavorites || 0;
  });

  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("totalOrdered").textContent = totalOrdered;
  document.getElementById("totalInCart").textContent = totalInCart;
  document.getElementById("totalInFavorites").textContent = totalInFavorites;
}

// admin-products.js  таблица товаров
function renderProductsTable() {
  document.getElementById("productsTableBody").innerHTML = products
    .map(
      (p, i) => `
            <tr>
                <td>${i + 1}</td><td>${p.image}</td><td>${p.name}</td>
                <td>${p.category}</td>
                <td>${p.price.toLocaleString("ru-RU")} ₽</td>
                <td>${p.stock}</td>
            </tr>
        `,
    )
    .join("");
}
```

---

</details>

<details>
<summary><a name="styles-css"></a><b> styles.css</b>  единый файл стилей</summary>

---

Один CSS-файл для всего приложения (~800 строк). Mobile-first, breakpoint 768px.

```css
:root {
  --primary: #3b82f6;
  --success: #10b981;
  --danger: #ef4444;
  --bg: #f9fafb;
  --card-bg: #ffffff;
  --text: #111827;
  --text2: #6b7280;
  --border: #e5e7eb;
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-card {
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 1rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr 1fr;
  }
  .navbar {
    display: none;
  }
  .burger {
    display: block;
  }
}
```

---

</details>

---

## Быстрый старт

Никаких зависимостей и сборки не требуется.

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/Comanda7/react_mag1.git
cd react_mag1
```

### 2. Откройте в браузере

Откройте файл `index.html` напрямую в любом браузере и готово.

> Навигация между страницами работает через обычные HTML-ссылки (`<a href="...">`).

### 3. (Опционально) Live Server в VS Code

Установите расширение **Live Server** и нажмите **Go Live** страница будет перезагружаться при каждом сохранении файла.

---

## Функционал

### Каталог (`index.html`)

- Список 60 товаров: телефоны, ноутбуки, аксессуары
- Фильтрация по категории
- Поиск по названию в реальном времени
- Сортировка по цене ( / )
- Пагинация (8 товаров / страница)
- Кнопки Избранное и Корзина с badge-счётчиками в шапке

### Корзина (`cart.html`)

- Таблица товаров с управлением количеством (+/)
- Удаление позиций
- Итоговая сумма
- Оформление заказа переход в личный кабинет

### Избранное (`favorites.html`)

- Сетка карточек избранных товаров
- При пустом списке заглушка

### Личный кабинет (`profile.html`)

- История заказов с деталями по каждому
- Список избранного
- Текущая корзина

### Статичные страницы

- `about.html` О компании + статистика
- `contacts.html` Контакты + форма обратной связи

### Админ-панель

| Файл                    | Описание                               |
| ----------------------- | -------------------------------------- |
| `admin.html`            | Статистика: товары, корзины, избранное |
| `admin-products.html`   | Таблица всех товаров                   |
| `admin-orders.html`     | История заказов                        |
| `admin-categories.html` | 3 отдельные таблицы по категориям      |

---

## Архитектурные решения

| Паттерн               | Реализация                                |
| --------------------- | ----------------------------------------- |
| Хранилище данных      | localStorage (без сервера и БД)           |
| Модульность           | Отдельный `.js` файл на каждую страницу   |
| Переиспользование     | Общие функции в `common.js` и `data.js`   |
| Данные                | Центральный массив `products` в `data.js` |
| Авторизация           | IIFE-паттерн в `auth.js`, инжекция модала |
| Синхронизация вкладок | `window.addEventListener('storage', ...)` |

---

## Данные

- **60 товаров** по 20 в каждой из трёх категорий
- Все данные хранятся **только в localStorage** браузера
- Полная синхронизация между всеми страницами без сервера
- Данные сохраняются между сессиями браузера

---

## Как залить проект на GitHub

### 1. Первая загрузка (новый репозиторий)

```bash
# 1. Перейти в папку проекта
cd path/to/Inter_mag1

# 2. Инициализировать git-репозиторий
git init

# 3. Добавить все файлы в индекс
git add .

# 4. Сделать первый коммит
git commit -m "first commit"

# 5. Переименовать ветку в main
git branch -M main

# 6. Привязать удалённый репозиторий (создать его заранее на github.com)
git remote add origin https://github.com/Comanda7/react_mag1.git

# 7. Отправить на GitHub
git push -u origin main
```

### 2. Последующие обновления

```bash
# Посмотреть изменённые файлы
git status

# Добавить все изменения
git add .

# Сделать коммит с описанием изменений
git commit -m "fix: описание что изменилось"

# Отправить на GitHub
git push
```

### 3. Полезные команды

```bash
git log --oneline        # история коммитов
git diff                 # что изменилось (до git add)
git diff --staged        # что изменилось (после git add)
git remote -v            # проверить привязанный репозиторий
git branch               # список веток
git pull                 # получить изменения с GitHub
```

### 4. Соглашение по коммит-сообщениям

```
feat:     добавить новый компонент
fix:      исправить баг в корзине
style:    обновить стили хедера
refactor: переработать логику фильтрации
docs:     обновить README
```

> **Репозиторий проекта:** https://github.com/Comanda7/react_mag1

---

## Рабочий процесс в VS Code (рекомендованные расширения)

```
Live Server         запуск страниц с авто-перезагрузкой
ESLint              подсветка ошибок JS
Prettier            форматирование кода
Auto Rename Tag     синхронное переименование HTML-тегов
GitLens             история git
```

---

## Лицензия

MIT используйте свободно в учебных целях.
