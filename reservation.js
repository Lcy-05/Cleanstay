document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const guests = urlParams.get('guests');
    const cleaningService = urlParams.get('cleaningService') === 'true';
    const securityService = urlParams.get('securityService') === 'true';

    const reservationDetails = `
        숙소 ID: ${listingId}<br>
        체크인: ${checkin}<br>
        체크아웃: ${checkout}<br>
        인원 수: ${guests}<br>
        청소 서비스: ${cleaningService ? '선택' : '선택 안 함'}<br>
        보안 서비스: ${securityService ? '선택' : '선택 안 함'}
    `;
    document.getElementById('reservation-details').innerHTML = reservationDetails;

    const totalAmount = calculateTotalAmount(listingId, checkin, checkout, cleaningService, securityService);
    document.getElementById('total-amount').innerText = `₩${totalAmount.toLocaleString()}`;
});

function calculateTotalAmount(listingId, checkin, checkout, cleaningService, securityService) {
    const basePrice = 100000; // 예시: 기본 가격 ₩100,000/박
    const nights = (new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24);
    const isPeakSeason = isDateInPeakSeason(checkin, checkout);
    const baseRate = isPeakSeason ? 11.5 : 7.5;

    let totalAmount = basePrice * nights;
    let feeRate = baseRate;

    // 청소 서비스 수수료 적용
    if (cleaningService) {
        feeRate += 3; // 예시: 소형 숙소 청소 서비스 수수료 3% 추가
    }

    // 보안 서비스 수수료 적용
    if (securityService) {
        feeRate += 2; // 예시: 기본 안전 패키지 수수료 2% 추가
    }

    // 총 수수료 계산
    const totalFee = (feeRate / 100) * totalAmount;
    totalAmount += totalFee;

    return totalAmount;
}

function isDateInPeakSeason(checkin, checkout) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const peakSeasonStart = new Date(checkinDate.getFullYear(), 6, 1); // 7월 1일
    const peakSeasonEnd = new Date(checkinDate.getFullYear(), 7, 31); // 8월 31일

    return (checkinDate >= peakSeasonStart && checkinDate <= peakSeasonEnd) ||
           (checkoutDate >= peakSeasonStart && checkoutDate <= peakSeasonEnd);
}