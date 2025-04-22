import TypeIt from "typeit";

export function runRoleTyping() {
    new TypeIt("#typing-role", {
        speed: 60,
        waitUntilVisible: true,
        loop: true,
        cursor: true,
        cursorChar: "|",
        lifeLike: true,
    })
        .type("Backend Developer")
        .pause(1200)
        .delete()
        .pause(600)
        .type("Java & Spring Boot")
        .pause(1200)
        .delete()
        .pause(600)
        .type("Microservices Enthusiast")
        .pause(1200)
        .delete()
        .pause(1500)
        .delete()
        .go();
}

