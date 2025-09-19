        // DOM Elements
        const slides = document.querySelector(".slides");
        const slideItems = document.querySelectorAll(".slide");
        const prevBtn = document.querySelector(".prev");
        const nextBtn = document.querySelector(".next");
        const dotsContainer = document.querySelector(".dots");
        const menuToggle = document.querySelector(".menu-toggle");
        const navLinks = document.querySelector(".navLinks");
        const navBar = document.querySelector(".navBar");
        const bookingForm = document.getElementById("tour-booking-form");

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
            interval = setInterval(nextSlide, 5000); // 5 seconds
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        // Form submission
        bookingForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for your booking request! We will contact you shortly to confirm your tour.");
            bookingForm.reset();
        });

        // Set minimum date to today for the date picker
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const todayStr = `${yyyy}-${mm}-${dd}`;
        document.getElementById("date").min = todayStr;

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
