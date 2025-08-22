// Menu Hamburguer
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        let targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        let targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mudar navbar no scroll
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1rem 0';
    }
});

// Validação do formulário
let form = document.querySelector('.contato-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validação simples
        let isValid = true;
        let inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = '#ddd';
            }
        });
        
        // Validação de email
        let emailInput = form.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = 'red';
            }
        }
        
        if (isValid) {
            // Simulação de envio
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    });
}

// Animação de elementos ao scroll
let observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    let elementsToAnimate = document.querySelectorAll('.area-card, .depoimento, .sobre-img, .sobre-text, .contato-info, .contato-form');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});