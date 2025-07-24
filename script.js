document.addEventListener('DOMContentLoaded', () => {
            const htmlElement = document.documentElement;
            const themeToggleBtn = document.getElementById('theme-toggle');
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');
            const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
            const contactForm = document.getElementById('contact-form');
            const submissionMessage = document.getElementById('submission-message');



            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                htmlElement.classList.add('dark');
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } 
            else {
                htmlElement.classList.remove('dark');
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }

            themeToggleBtn.addEventListener('click', () => {
                if (htmlElement.classList.contains('dark')) {
                    htmlElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    sunIcon.classList.remove('hidden');
                    moonIcon.classList.add('hidden');
                } 
                else {
                    htmlElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    sunIcon.classList.add('hidden');
                    moonIcon.classList.remove('hidden');
                }
            });

            window.addEventListener('scroll', () => {
                
                if (window.scrollY > 200) {
                    scrollToTopBtn.classList.remove('opacity-0');
                    scrollToTopBtn.classList.add('opacity-100');
                } else {
                    scrollToTopBtn.classList.remove('opacity-100');
                    scrollToTopBtn.classList.add('opacity-0');
                }
            });


            contactForm.addEventListener('submit', (event) => {
                event.preventDefault();


                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;


                submissionMessage.classList.remove('hidden');
                submissionMessage.classList.remove('bg-red-100', 'text-red-800'); 
                submissionMessage.classList.add('bg-green-100', 'text-green-800');
                submissionMessage.innerHTML = 'Thank you! Your message has been sent.';

                contactForm.reset();


                setTimeout(() => {
                    submissionMessage.classList.add('hidden');
                }, 5000);
            });


            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Smooth scroll animation
                });
            });

            
        });
