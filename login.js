document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginError = document.getElementById('login-error');

    const data = {
        email: email,
        password: password
    };

    fetch('서버_엔드포인트', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            loginError.textContent = '로그인에 실패했습니다. 다시 시도해주세요.';
            document.getElementById('login-form').reset();
        }
    })
    .catch(error => {
        loginError.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
        document.getElementById('login-form').reset();
    });
});