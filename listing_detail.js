document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id');

    // 가짜 데이터 예제
    const listingData = {
        title: '제주도 아름다운 숙소',
        description: '이 숙소는 제주도에 위치해 있으며, 아름다운 풍경을 자랑합니다.',
        price: '₩100,000 / 박',
        cleanliness: '5.0',
        security: '4.8',
        photos: [
            'images/photo1.jpg',
            'images/photo2.jpg',
            'images/photo3.jpg'
        ]
    };

    // 실제 데이터 로드 함수
    function loadListingData(listingId) {
        // 여기에 실제 데이터 로드 로직 추가
        // 예제 데이터 사용
        document.getElementById('listing-title').innerText = listingData.title;
        document.getElementById('listing-description').innerText = listingData.description;
        document.getElementById('listing-price').innerText = `가격: ${listingData.price}`;
        document.getElementById('listing-cleanliness').innerText = `청결도: ${listingData.cleanliness}`;
        document.getElementById('listing-security').innerText = `보안: ${listingData.security}`;

        const photoGallery = document.getElementById('photo-gallery');
        listingData.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = '숙소 사진';
            photoGallery.appendChild(img);
        });
    }

    loadListingData(listingId);
});

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const listingId = new URLSearchParams(window.location.search).get('id');
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    if (!checkin || !checkout || !guests) {
        alert('모든 필드를 입력해 주세요.');
        return;
    }

    const cleaningService = document.getElementById('cleaning-service').checked;
    const securityService = document.getElementById('security-service').checked;

    // 예약 처리 로직 추가
    window.location.href = `reservation.html?id=${listingId}&checkin=${checkin}&checkout=${checkout}&guests=${guests}&cleaningService=${cleaningService}&securityService=${securityService}`;
});

// 리뷰 폼 제출 이벤트 처리
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const reviewText = document.getElementById('review-text').value;
    // 리뷰 제출 처리 로직
    alert('리뷰가 제출되었습니다.');
});