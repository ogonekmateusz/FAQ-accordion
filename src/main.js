const btns = document.querySelectorAll('img[alt="Toggle Icon"]');
const buttons = document.querySelectorAll(".accordion-toggle-btn");

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const button = buttons[index];
        if (button.classList.contains("collapsed")) {
            button.classList.remove("collapsed");
            btn.src = "./assets/img/icon-plus.svg";
        } else {
            button.classList.add("collapsed");
            btn.src = "./assets/img/icon-minus.svg";
        }
    });
});
