  // DOM Elements
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".navLinks");
        const navBar = document.querySelector(".navBar");



        // Mobile menu toggle
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // Navbar scroll effect
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navBar.classList.add("scrolled");
            } else {
                navBar.classList.remove("scrolled");
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll(".navLinks nav ul li a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });

        // Initialize
        showSlide(index);
        startAutoSlide();

        // Adjust hero content on resize
        window.addEventListener('resize', function() {
            // Force re-render to adjust to new screen size
            const heroContent = document.querySelector('.hero-content');
            heroContent.style.display = 'none';
            setTimeout(() => {
                heroContent.style.display = 'block';
            }, 100);
        });


                        //footer

              // Back to top button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.opacity = '1';
                backToTopBtn.style.visibility = 'visible';
            } else {
                backToTopBtn.style.opacity = '0';
                backToTopBtn.style.visibility = 'hidden';
            }
        });
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Newsletter form submission
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });

        // Animation on scroll
        const footerSections = document.querySelectorAll('.footer-content > div');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        footerSections.forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
        });
