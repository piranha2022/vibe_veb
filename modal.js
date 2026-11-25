
// Основной файл JavaScript
document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('modalOverlay').classList.add('modal--opened');
});


document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('modalOverlay').classList.remove('modal--opened');
});


document.getElementById('modalOverlay').addEventListener('click', function (event) {
    // Закрываем модальное окно, если кликнули вне его (но не на саму кнопку открытия)
    if (event.target === this) {
        this.classList.remove('modal--opened');
    }
});


// Дополнительно: закрыть по клавише ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && document.querySelector('.modal-overlay.modal--opened')) {
        document.getElementById('openModal').click();
        event.preventDefault();
    }
});




