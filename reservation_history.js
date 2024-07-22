document.addEventListener('DOMContentLoaded', function() {
    const reservationHistoryList = document.getElementById('reservation-history-list');

    // 예제 데이터
    const reservations = [
        { id: 1, listing: '제주도 숙소 1', checkin: '2023-07-01', checkout: '2023-07-03' },
        { id: 2, listing: '제주도 숙소 2', checkin: '2023-08-15', checkout: '2023-08-17' }
    ];

    reservations.forEach(reservation => {
        const listItem = document.createElement('li');
        listItem.innerText = `${reservation.listing} - 체크인: ${reservation.checkin}, 체크아웃: ${reservation.checkout}`;
        reservationHistoryList.appendChild(listItem);
    });
});