const emailInput = document.querySelector('.email-input');
const submitBtn = document.querySelector('.btn-primary');

submitBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (!email || !email.includes('@')) {
        alert('請輸入有效的電子郵件地址');
        return;
    }
    window.location.href = 'https://chatgpt.com/auth/login';
});