const sections = [
    { id: "sobre-mi", title: "Edwin | Acerca de mí" },
    { id: "experiencia", title: "Edwin | Experiencia" },
    { id: "proyectos", title: "Edwin | Proyectos" },
];

window.addEventListener("scroll", () => {
    let currentTitle = "Edwin | Backend Developer";
    for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentTitle = section.title;
                break;
            }
        }
    }
    document.title = currentTitle;
});


