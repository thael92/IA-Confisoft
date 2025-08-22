// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observar elementos com fade-in
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Formatar mensagem para WhatsApp
            const formData = new FormData(this);
            const message = `Olá! Gostaria de saber mais sobre a automação ConfiSoft.\n\n` +
                          `Nome: ${formData.get('name')}\n` +
                          `Email: ${formData.get('email')}\n` +
                          `Telefone: ${formData.get('phone')}\n` +
                          `Mensagem: ${formData.get('message')}`;

            // Abrir WhatsApp
            window.open(`https://wa.me/5521971399708?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
});

// Smooth scroll
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}