const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const lightThemeLabel = themeToggle?.dataset.labelLight ?? "Cambiar a tema claro";
const darkThemeLabel = themeToggle?.dataset.labelDark ?? "Cambiar a tema oscuro";

function setTheme(theme) {
    document.documentElement.classList.toggle("theme-light", theme === "light");
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    if (themeIcon) {
        themeIcon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    if (themeToggle) {
        const actionLabel = theme === "light" ? darkThemeLabel : lightThemeLabel;
        themeToggle.setAttribute("aria-label", actionLabel);
        themeToggle.setAttribute("aria-pressed", String(theme === "light"));
        themeToggle.setAttribute("title", actionLabel);
    }
}

setTheme(document.documentElement.dataset.theme ?? "dark");

themeToggle?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
});
