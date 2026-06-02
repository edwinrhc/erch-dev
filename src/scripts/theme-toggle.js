const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    if (themeIcon) {
        themeIcon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    if (themeToggle) {
        themeToggle.setAttribute("aria-label", theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
        themeToggle.setAttribute("title", theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
    }
}

setTheme(document.documentElement.dataset.theme ?? "dark");

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
});
