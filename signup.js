document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const signupError = document.getElementById('signup-error');

    const data = {
        name: name,
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
            window.location.href = 'login.html';
        } else {
            signupError.textContent = '회원가입에 실패했습니다. 다시 시도해주세요.';
            document.getElementById('signup-form').reset();
        }
    })
    .catch(error => {
        signupError.textContent = '오류가 발생했습니다. 다시 시도해주세요.';
        document.getElementById('signup-form').reset();
    });
});