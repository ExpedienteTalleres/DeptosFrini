document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            })
        })
    })
    const currentYearSpan = document.getElementById("current-year")
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear().toString()
    }
    const menuToggle = document.querySelector(".menu-toggle")
})

document.addEventListener('DOMContentLoaded', function() {
    const btnHamb = document.querySelector('.menu_hamburguesa');
    const navLista = document.querySelector('.nav__ul');
    const closeBtn = document.querySelector('.close-menu');

    btnHamb.addEventListener('click', () => {
        navLista.classList.add('active');
        btnHamb.classList.add('hide');
        closeBtn.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        navLista.classList.remove('active');
        btnHamb.classList.remove('hide');
        closeBtn.classList.remove('show');
    });
});
