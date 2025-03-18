document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".project-category");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const menu = this.nextElementSibling;

            if (menu.classList.contains("open")) {
                menu.classList.remove("open");
                menu.style.maxHeight = null;
                this.querySelector("span").textContent = "+";
            } else {
                menu.classList.add("open");
                menu.style.maxHeight = menu.scrollHeight + "px";
                this.querySelector("span").textContent = "−";
            }
        });
    });

    // Add submenu toggle for Programming Section
    const subCategories = document.querySelectorAll(".sub-category");

    subCategories.forEach(subCategory => {
        subCategory.addEventListener("click", function() {
            const subMenu = this.nextElementSibling;

            if (subMenu.classList.contains("open")) {
                subMenu.classList.remove("open");
                subMenu.style.maxHeight = null;
            } else {
                subMenu.classList.add("open");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
            }
        });
    });
});
