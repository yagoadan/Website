document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".project-category");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const menu = this.nextElementSibling;

            if (menu.classList.contains("open")) {
                menu.classList.remove("open");
                this.querySelector("span").textContent = "+";
            } else {
                menu.classList.add("open");
                this.querySelector("span").textContent = "−";
            }
        });
    });
});
