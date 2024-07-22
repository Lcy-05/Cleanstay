document.addEventListener('DOMContentLoaded', function() {
    // 예약 내역과 즐겨찾기 링크에 클릭 이벤트 추가
    const reservationHistoryLink = document.querySelector('#reservation-history a');
    const favoritesLink = document.querySelector('#favorites a');

    reservationHistoryLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'reservation_history.html';
    });

    favoritesLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'favorites.html';
    });
});