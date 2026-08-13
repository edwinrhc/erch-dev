const isEnglish = document.documentElement.lang === "en";
const defaultTitle = document.title;
const sections = isEnglish
    ? [
        { id: "about", title: "Edwin | About" },
        { id: "experience", title: "Edwin | Experience" },
        { id: "projects", title: "Edwin | Projects" },
        { id: "credentials", title: "Edwin | Credentials" },
        { id: "contact", title: "Edwin | Contact" },
    ]
    : [
        { id: "sobre-mi", title: "Edwin | Acerca de mí" },
        { id: "experiencia", title: "Edwin | Experiencia" },
        { id: "proyectos", title: "Edwin | Proyectos" },
        { id: "formacion", title: "Edwin | Formación" },
        { id: "contact", title: "Edwin | Contacto" },
    ];

window.addEventListener("scroll", () => {
    let currentTitle = defaultTitle;
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


