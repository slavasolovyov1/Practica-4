let password = 'asdqwqrf_';

if (password.length >= 5 && password.includes('_') || password.includes('-')) {
    alert('Пароль отличный ')
    
} else {
    alert('Пароль не надежный, введи другой!')
}