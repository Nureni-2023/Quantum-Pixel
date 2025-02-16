document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector("nav ul");

    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    } else {
        console.error("Menu icon or navigation menu not found!");
    }

    // Function to show images based on group
    window.showImages = function (group) {
        // Hide all image boxes
        document.querySelectorAll(".image-box").forEach(box => {
            box.classList.remove("active");
        });

        // Show only selected group
        document.querySelectorAll(".group-" + group).forEach(box => {
            box.classList.add("active");
        });
    };

    // Intersection Observer for testimonials
    const testimonials = document.querySelectorAll(".testimonial");

    if (testimonials.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        testimonials.forEach(testimonial => observer.observe(testimonial));
    }

    // Set current year in footer
    const yearEl = document.querySelector(".year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    } else {
        console.error("Element with class 'year' not found!");
    }

    // Scrollbar customization (Placeholder for adding styles)
    // You can add custom scrollbar styling in CSS.
});

