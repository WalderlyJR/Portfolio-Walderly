
        document.addEventListener('DOMContentLoaded', () => {
            const menuButton = document.getElementById('menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const closeMenuButton = document.getElementById('close-menu-button');
            const navLinks = document.querySelectorAll('#mobile-menu a');
            const sections = document.querySelectorAll('section, nav');

            // Função para alternar a visibilidade do menu
            function toggleMenu() {
                mobileMenu.classList.toggle('hidden-menu');
                mobileMenu.classList.toggle('show-menu');
            }

            menuButton.addEventListener('click', toggleMenu);
            closeMenuButton.addEventListener('click', toggleMenu);

            // Adiciona evento de clique em todos os links do menu móvel para fechar o menu
            navLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });
            
            // Adiciona o "scroll suave" nos links de navegação
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Animação de entrada
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

        });
    