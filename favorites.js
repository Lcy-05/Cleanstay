document.addEventListener('DOMContentLoaded', function() {
    const favoritesList = document.getElementById('favorites-list');

    // 예제 데이터
    const favorites = [
        { id: 1, listing: '제주도 숙소 1' },
        { id: 2, listing: '제주도 숙소 2' }
    ];

    favorites.forEach(favorite => {
        const listItem = document.createElement('li');
        listItem.innerText = favorite.listing;
        favoritesList.appendChild(listItem);
    });
});