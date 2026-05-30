/* EXPLORE BUTTON */

const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    document.querySelector("#about")
        .scrollIntoView({
            behavior: "smooth"
        });

});

/* SCROLL ANIMATION */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
    ".hidden"
).forEach((el) => {

    observer.observe(el);

});