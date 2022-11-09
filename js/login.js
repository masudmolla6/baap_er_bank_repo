document.getElementById('btn-login').addEventListener('click', function () {
    const emailField = document.getElementById('input-email');
    const Email = emailField.value;

    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(password);

    if (Email === 'masudrana@gmail.com' && password === '12345') {
        window.location.href = 'bank.html';
    }
    else {
        alert('try again');
    }

    emailField.value = '';
    password.value = '';

})
