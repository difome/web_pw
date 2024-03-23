const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".theme-switcher").textContent = "🌞";
} else if (currentTheme == "light") {
    document.querySelector(".theme-switcher").textContent = "🌓";
} else if (prefersDarkScheme.matches) {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".theme-switcher").textContent = "🌞";
}
const switcher = document.querySelector(".theme-switcher");
switcher.addEventListener("click", function () {
    if (localStorage.getItem("theme") === "auto") {
        localStorage.setItem("theme", "light");
        document.querySelector(".theme-switcher").textContent = "🌓";
        document.body.classList.remove("dark-mode");
    } else if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "light");
        document.querySelector(".theme-switcher").textContent = "🌓";
        document.body.classList.remove("dark-mode");
    } else {
        localStorage.setItem("theme", "dark");
        document.querySelector(".theme-switcher").textContent = "🌞";
        document.body.classList.add("dark-mode");
    }
});
prefersDarkScheme.addEventListener('change', () => {
    if (localStorage.getItem("theme") === "auto" || !localStorage.getItem("theme")) {
        document.body.classList.toggle("dark-mode");
        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
            switcher.textContent = "🌞";
        } else {
            switcher.textContent = "🌓";
        }
        localStorage.setItem("theme", theme);
    }
});

// Скрипт для відкриття та закриття модального вікна
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("loginModal");
    var btn = document.getElementById("loginLink");
    var span = document.getElementsByClassName("close-button")[0];

    btn.onclick = function () {
        modal.style.display = "block";
        setTimeout(function () { modal.style.opacity = 1; }, 10);
    }

    span.onclick = function () {
        modal.style.opacity = 0;
        setTimeout(function () { modal.style.display = "none"; }, 500);
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.opacity = 0;
            setTimeout(function () { modal.style.display = "none"; }, 500);
        }
    }
});