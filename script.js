// Welcome Message
window.onload = function () {
    console.log("Welcome to Travel Explorer!");
};

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Allow normal navigation to other HTML pages
        if (href.endsWith(".html")) {
            return;
        }

        e.preventDefault();
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact Form Validation
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const phone = form.querySelector("input[type='tel']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}

// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
}); 