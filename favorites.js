// Страница избранного
function renderFavorites() {
    const favorites = getFavorites();
    const favoriteProducts = products.filter(p => favorites.includes(p.id));
    const grid     = document.getElementById('favoritesGrid');
    const emptyMsg = document.getElementById('emptyFavorites');

    if (favoriteProducts.length === 0) {
        grid.innerHTML = '';
        emptyMsg.style.display = 'block';
        return;
    }
    emptyMsg.style.display = 'none';
    grid.innerHTML = favoriteProducts
        .map(product => createProductCard(product))
        .join('');
}

document.addEventListener('DOMContentLoaded', () => { renderFavorites(); });