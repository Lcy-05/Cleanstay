document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateDates();
    searchListings();
});

function validateDates() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert('체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다.');
    }
}

function searchListings() {
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 검색 결과 페이지로 이동
    window.location.href = `search_results.html?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
}

// Google Maps 초기화
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.499621, lng: 126.531188 },
        zoom: 10
    });

    const geocoder = new google.maps.Geocoder();
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById('location').value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// 숙소 카드 클릭 시 상세 페이지로 이동
document.querySelectorAll('.listing-card img').forEach(function(card) {
    card.addEventListener('click', function() {
        const listingId = this.dataset.id;
        window.location.href = `listing_detail.html?id=${listingId}`;
    });
});

// 마이페이지 예약 내역 및 즐겨찾기 목록 클릭 시 새 창으로 이동
document.getElementById('reservation-history').addEventListener('click', function() {
    window.location.href = 'reservation_history.html';
});

document.getElementById('favorites').addEventListener('click', function() {
    window.location.href = 'favorites.html';
});

// 상세 페이지에서 예약 버튼 클릭 시 예약 기능 처리
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 유효성 검사
    if (!checkin || !checkout || !guests) {
        alert('모든 필드를 입력해 주세요.');
        return;
    }

    // 청소 및 보안 서비스 선택 여부 확인
    const cleaningService = document.getElementById('cleaning-service').checked;
    const securityService = document.getElementById('security-service').checked;

    // 예약 처리 로직 추가
    // ...

    alert('예약이 완료되었습니다.');
});
// 검색 폼 제출 이벤트 처리
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 유효성 검사
    if (!location || !checkin || !checkout || !guests) {
        alert('모든 필드를 입력해 주세요.');
        return;
    }

    // 검색 결과 페이지로 이동
    window.location.href = `search_results.html?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
});

// Google Maps 초기화
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.499621, lng: 126.531188 },
        zoom: 10
    });

    const geocoder = new google.maps.Geocoder();
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById('location').value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// 숙소 카드 클릭 시 상세 페이지로 이동
document.querySelectorAll('.listing-card img').forEach(function(card) {
    card.addEventListener('click', function() {
        const listingId = this.dataset.id;
        window.location.href = `listing_detail.html?id=${listingId}`;
    });
});

// 마이페이지 예약 내역 및 즐겨찾기 목록 클릭 시 새 창으로 이동
document.getElementById('reservation-history').addEventListener('click', function() {
    window.location.href = 'reservation_history.html';
});

document.getElementById('favorites').addEventListener('click', function() {
    window.location.href = 'favorites.html';
});

// 상세 페이지에서 예약 버튼 클릭 시 예약 기능 처리
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 유효성 검사
    if (!checkin || !checkout || !guests) {
        alert('모든 필드를 입력해 주세요.');
        return;
    }

    // 청소 및 보안 서비스 선택 여부 확인
    const cleaningService = document.getElementById('cleaning-service').checked;
    const securityService = document.getElementById('security-service').checked;

    // 예약 처리 로직 추가
    // ...

    alert('예약이 완료되었습니다.');
});
function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showLoadingSpinner();
    // 검색 처리 로직 추가
    setTimeout(hideLoadingSpinner, 2000); // 예제: 2초 후 로딩 스피너 숨기기
});
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    // 언어 변경 로직 추가
    alert(`언어가 ${selectedLanguage}로 변경되었습니다.`);
});
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    showLoadingSpinner();
    validateDates();
    searchListings();
});

function showLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'block';
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').style.display = 'none';
}

function validateDates() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert('체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다.');
    }
}

function searchListings() {
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 검색 결과 페이지로 이동
    window.location.href = `search_results.html?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
    setTimeout(hideLoadingSpinner, 2000); // 예제: 2초 후 로딩 스피너 숨기기
}

document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    // 언어 변경 로직 추가
    alert(`언어가 ${selectedLanguage}로 변경되었습니다.`);
});
document.getElementById('language-selector').addEventListener('change', function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[language] && translations[language][key]) {
            element.innerText = translations[language][key];
        }
    });
}

// 페이지가 로드될 때 기본 언어 설정
document.addEventListener('DOMContentLoaded', function() {
    const defaultLanguage = 'ko'; // 기본 언어를 한국어로 설정
    changeLanguage(defaultLanguage);
});
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    validateDates();
    searchListings();
});

function validateDates() {
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (new Date(checkin) >= new Date(checkout)) {
        alert('체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다.');
    }
}

function searchListings() {
    const location = document.getElementById('location').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // 검색 결과 페이지로 이동
    window.location.href = `search_results.html?location=${location}&checkin=${checkin}&checkout=${checkout}&guests=${guests}`;
}