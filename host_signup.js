document.getElementById('host-signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const hostName = document.getElementById('host-name').value;
    const hostEmail = document.getElementById('host-email').value;
    const hostPhone = document.getElementById('host-phone').value;

    const listingTitle = document.getElementById('listing-title').value;
    const listingDescription = document.getElementById('listing-description').value;
    const listingLocation = document.getElementById('listing-location').value;
    const listingPrice = document.getElementById('listing-price').value;
    const listingGuests = document.getElementById('listing-guests').value;

    const cleaningService = document.getElementById('cleaning-service').checked;
    const securityService = document.getElementById('security-service').checked;
    const packageService = document.getElementById('package-service').checked;

    const listingPhotos = document.getElementById('listing-photos').files;

    let totalFee = calculateFees(listingPrice, cleaningService, securityService, packageService);

    // 서버로 데이터 전송 로직 추가
    const formData = new FormData();
    formData.append('hostName', hostName);
    formData.append('hostEmail', hostEmail);
    formData.append('hostPhone', hostPhone);
    formData.append('listingTitle', listingTitle);
    formData.append('listingDescription', listingDescription);
    formData.append('listingLocation', listingLocation);
    formData.append('listingPrice', listingPrice);
    formData.append('listingGuests', listingGuests);
    formData.append('cleaningService', cleaningService);
    formData.append('securityService', securityService);
    formData.append('packageService', packageService);
    for (let i = 0; i < listingPhotos.length; i++) {
        formData.append('listingPhotos', listingPhotos[i]);
    }

    fetch('서버_엔드포인트', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // 등록 완료 페이지로 이동
        window.location.href = `host_summary.html?title=${listingTitle}&description=${listingDescription}&location=${listingLocation}&price=${listingPrice}&guests=${listingGuests}&cleaningService=${cleaningService}&securityService=${securityService}&packageService=${packageService}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function calculateFees(price, cleaningService, securityService, packageService) {
    const basePrice = parseInt(price);
    let feeRate = isPeakSeason() ? 5 : 3; // 기본 호스트 수수료

    if (packageService) {
        feeRate = isPeakSeason() ? 15 : 12;
    } else {
        if (cleaningService) {
            feeRate += 3;
        }
        if (securityService) {
            feeRate += 2;
        }
    }

    const totalFee = (feeRate / 100) * basePrice;
    return totalFee;
}

function isPeakSeason() {
    const currentMonth = new Date().getMonth() + 1;
    return (currentMonth >= 7 && currentMonth <= 8); // 7월, 8월이 성수기
}