const menu = document.querySelector(".menu");
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }

    prevScrollPos = currentScrollPos;
});

// Получаем все элементы с классом "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Обработчик события для каждой ссылки
scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

