document.addEventListener("DOMContentLoaded", function () {
    const createReviewBtn = document.getElementById("createReviewBtn");
    const reviewForm = document.getElementById("reviewForm");
    const cancelBtn = document.getElementById("cancelBtn");
    const stars = document.querySelectorAll(".star");
    const ratingInput = document.getElementById("rating");
    const form = document.getElementById("customerReviewForm");

    // Show form when clicking "Write a Review"
    createReviewBtn.addEventListener("click", function () {
        reviewForm.style.display = "block";
    });

    // Hide form when clicking "Cancel"
    cancelBtn.addEventListener("click", function () {
        reviewForm.style.display = "none";
    });

    // Handle Star Rating Selection
    stars.forEach(star => {
        star.addEventListener("click", function () {
            let value = this.getAttribute("data-value");
            ratingInput.value = value;

            // Highlight selected stars
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });

        // Star hover effect
        star.addEventListener("mouseover", function () {
            let value = this.getAttribute("data-value");
            stars.forEach((s, index) => {
                s.style.color = index < value ? "gold" : "gray";
            });
        });

        // Reset colors when mouse leaves
        star.addEventListener("mouseout", function () {
            stars.forEach((s, index) => {
                s.style.color = index < ratingInput.value ? "gold" : "gray";
            });
        });
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        if (ratingInput.value === "") {
            alert("Please select a star rating.");
            event.preventDefault();
        } else {
            alert("Thank you for your review!");
            form.reset();
            stars.forEach(s => s.classList.remove("active"));
            ratingInput.value = "";
            reviewForm.style.display = "none"; // Hide form after submission
        }
    });
});
