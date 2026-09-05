// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de aparição ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.servico-card, .produto-card').forEach(el => {
    observer.observe(el);
});

// Animação do hamburger menu
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    });
}

// Manipulação do formulário de contato
const form = document.querySelector('.contato-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        // Simular envio
        console.log('Formulário enviado!');
        console.log('Nome:', formData.get('nome'));
        console.log('Email:', formData.get('email'));
        console.log('Mensagem:', formData.get('mensagem'));
        
        // Mostrar mensagem de sucesso
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
}

// Efeito de hover nos cards
document.querySelectorAll('.servico-card, .produto-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Adicionar ao carrinho
document.querySelectorAll('.add-cart').forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.closest('.produto-card').querySelector('h3').textContent;
        const price = this.closest('.produto-card').querySelector('.preco').textContent;
        
        alert(`${productName} (${price}) adicionado ao carrinho!`);
    });
});

// Ativar link de navegação atual
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animação de entrada ao carregar a página
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});