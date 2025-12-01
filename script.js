// Переключение темы
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Проверяем сохраненную тему или предпочтения системы
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
} else {
    document.documentElement.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
}

// Обработчик переключения
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
    
    if (document.documentElement.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Устанавливаем текущий год в футере
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Плавное появление элементов при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.main-content > *');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
    
    // Анимация для аватара
    const avatar = document.querySelector('.avatar');
    setTimeout(() => {
        avatar.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        avatar.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            avatar.style.transform = 'scale(1)';
        }, 800);
    }, 500);
});

// Консоль-приветствие
console.log('%c👋 Привет! Код страницы открыт для изучения.', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
console.log('%cСделано с минимализмом, но со вкусом.', 'color: #8b5cf6; font-size: 12px;');