document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".project-category");
    
    categories.forEach(category => {
        category.addEventListener("click", function() {
            const menu = this.nextElementSibling;
            
            if (menu.style.maxHeight) {
                menu.style.maxHeight = null;
                this.querySelector("span").textContent = "+";
            } else {
                menu.style.maxHeight = menu.scrollHeight + "px";
                this.querySelector("span").textContent = "−";
            }
        });
    });
});
