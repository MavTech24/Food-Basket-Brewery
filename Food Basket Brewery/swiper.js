        // DOM Elements
        const slides = document.querySelector(".slides");
        const slideItems = document.querySelectorAll(".slide");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const dotsContainer = document.querySelector(".dots");
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".navLinks");
        const navBar = document.querySelector(".navBar");

        let index = 0;
        let slideCount = slideItems.length;
        let interval;

        // Create dots
        for (let i = 0; i < slideCount; i++) {
            const dot = document.createElement("span");
            if (i === 0) dot.classList.add("active");
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll(".dots span");

        // Show slide function
        function showSlide(i) {
            if (i >= slideCount) index = 0;
            if (i < 0) index = slideCount - 1;

            slides.style.transform = `translateX(${-index * 100}%)`;

            dots.forEach(dot => dot.classList.remove("active"));
            dots[index].classList.add("active");
        }

        // Next and previous slide functions
        function nextSlide() {
            index++;
            showSlide(index);
        }

        function prevSlide() {
            index--;
            showSlide(index);
        }

        // Auto slide function
        function startAutoSlide() {
            interval = setInterval(nextSlide, 7000); // 7 seconds
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        // Events for slider navigation
        nextBtn.addEventListener("click", () => {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        });

        // Events for dots
        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                index = i;
                showSlide(index);
                stopAutoSlide();
                startAutoSlide();
            });
        });

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

        // Animated Fun Facts
        document.querySelectorAll('.fact-number').forEach(function(el) {
            const count = +el.getAttribute('data-count');
            let current = 0;
            const increment = Math.ceil(count / 60);
            function update() {
                current += increment;
                if (current > count) current = count;
                el.textContent = current;
                if (current < count) requestAnimationFrame(update);
            }
            update();
        });

        // Testimonials Slider
        let testimonialIndex = 0;
        const testimonialSlides = document.querySelectorAll('.testimonial-slide');
        function showTestimonial(idx) {
            testimonialSlides.forEach((slide, i) => {
                slide.style.display = i === idx ? 'block' : 'none';
            });
        }
        document.querySelector('.testimonial-prev').addEventListener('click', function() {
            testimonialIndex = (testimonialIndex - 1 + testimonialSlides.length) % testimonialSlides.length;
            showTestimonial(testimonialIndex);
        });
        document.querySelector('.testimonial-next').addEventListener('click', function() {
            testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
            showTestimonial(testimonialIndex);
        });
        showTestimonial(testimonialIndex);

        // Newsletter form submission
        document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
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