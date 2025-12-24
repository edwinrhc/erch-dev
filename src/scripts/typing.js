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
        .type("Backend Developer · Java & Spring Boot")
        .pause(1200)
        .delete()
        .pause(600)
        .type("Microservicios · APIs REST")
        .pause(1200)
        .delete()
        .pause(600)
        .type("Oracle · Docker · JWT")
        .pause(1200)
        .delete()
        .pause(1500)
        .delete()
        .go();
}

