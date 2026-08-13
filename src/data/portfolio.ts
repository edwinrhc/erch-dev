export const stackCategories = [
  {
    title: "Lenguajes",
    icon: "fa-solid fa-code",
    items: ["Java", "TypeScript", "JavaScript", "C#", "Python", "SQL"],
  },
  {
    title: "Backend y frameworks",
    icon: "fa-solid fa-server",
    items: ["Spring Boot", "Spring Security", "Spring Cloud", "Node.js", "NestJS", "ASP.NET Core"],
  },
  {
    title: "Arquitectura y diseño",
    icon: "fa-solid fa-layer-group",
    items: [
      "APIs REST",
      "Arquitectura por capas",
      "Clean Architecture",
      "Arquitectura hexagonal",
      "CQRS",
      "SOLID",
      "Microservicios",
      "Mensajería asíncrona",
      "JWT",
      "Control de roles",
    ],
  },
  {
    title: "Bases de datos",
    icon: "fa-solid fa-database",
    items: ["Oracle", "MySQL", "SQL Server", "JPA / Hibernate", "EF Core"],
  },
  {
    title: "DevOps e infraestructura",
    icon: "fa-solid fa-cloud",
    items: ["Docker", "Docker Compose", "CI/CD", "JBoss", "Linux"],
  },
  {
    title: "Testing y herramientas",
    icon: "fa-solid fa-screwdriver-wrench",
    items: ["JUnit", "Mockito", "Swagger", "Postman", "Git", "GitHub"],
  },
];

export const experiences = [
  {
    period: "Enero - Junio 2026",
    role: "Analista Programador",
    company: "HITSS Perú S.A.C.",
    organization: "Desarrollo e integración de soluciones backend empresariales",
    url: "https://www.hitss.com/",
    description: [
      "Desarrollo backend con Java 21 y Spring Boot, aplicando arquitectura hexagonal, Clean Architecture, CQRS y principios SOLID.",
      "Implementación de APIs REST con reglas de negocio, validaciones, DTOs, mapeos y manejo centralizado de excepciones.",
      "Integración de servicios, mensajería asíncrona, consultas sobre bases de datos relacionales y gestión de código con Git.",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "CQRS",
      "Arquitectura hexagonal",
      "APIs REST",
    ],
  },
  {
    period: "Julio 2020 - Diciembre 2025",
    role: "Desarrollador de Aplicaciones",
    company: "Secretaría Técnica AD HOC - PCM",
    organization: "Presidencia del Consejo de Ministros - Gobierno del Perú",
    url: "https://www.gob.pe/fonavi-st",
    description: [
      "Desarrollo y mantenimiento de aplicaciones institucionales con Java, Spring Boot y Oracle.",
      "Implementación de reglas de negocio, autenticación, control de accesos e integración de servicios.",
      "Modernización de sistemas legacy, control de calidad, documentación técnica y soporte de portales institucionales.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "Oracle",
      "JBoss",
      "Sistemas legacy",
    ],
  },
  {
    period: "Marzo - Mayo 2024",
    role: "Desarrollador",
    company: "Socius Perú S.A.C.",
    organization: "Consultoría en soluciones low-code e integración de sistemas",
    url: "https://sociuscorp.com/",
    description: [
      "Desarrollo e integración de endpoints REST con C# y .NET para conectar plataformas low-code con sistemas externos.",
      "Implementación de procesos de automatización y scraping con Python, BeautifulSoup y Scrapy.",
      "Optimización de interfaces en Quantum Visualizer y colaboración con equipos multidisciplinarios.",
    ],
    tags: [
      "C#",
      ".NET",
      "Python",
      "APIs REST",
      "Scrapy",
    ],
  },
];

export const projects = [
  {
    title: "Validador de Archivos Masivos",
    subtitle: "Migración Oracle Forms a VB.NET",
    description:
      "Modernización de un sistema legacy en Oracle Forms 6 hacia una aplicación de escritorio en VB.NET para procesar archivos TXT masivos. Redujo el procesamiento de aproximadamente 25 minutos a 2 minutos mediante reingeniería, uso eficiente de memoria y generación automática de reportes.",
    url: "https://github.com/edwinrhc/VALIDADOR_TEST",
    color: "amber",
    icon: "fa-solid fa-folder-open",
    tags: ["Visual Basic .NET", "Oracle", "iTextSharp", "OpenXML", "SpreadsheetLight"],
    featured: true,
  },
  {
    title: "Sistema de Gestión de Pedidos",
    subtitle: "Microservicios para e-commerce",
    description:
      "Backend basado en arquitectura de microservicios para una tienda online, con servicios de productos, pedidos, usuarios y pagos. Incluye Spring Cloud, Eureka, Feign Client y Docker.",
    url: "https://github.com/edwinrhc/ecomerce-microservices",
    color: "yellow",
    icon: "fa-solid fa-cart-shopping",
    tags: ["Java 17", "Spring Boot 3", "Spring Cloud", "Eureka", "Feign Client", "Docker"],
    featured: true,
  },
  {
    title: "Sistema de Citas Médicas",
    subtitle: "Backend con seguridad y pagos",
    description:
      "Aplicación para gestionar citas médicas con autenticación JWT, roles diferenciados, integración de pagos con Stripe y despliegue Dockerizado.",
    url: "https://github.com/edwinrhc/clinic-appointment-system",
    color: "green",
    icon: "fa-solid fa-hospital",
    tags: ["Java", "Spring Boot", "JWT", "Stripe", "Docker"],
    featured: true,
  },
  {
    title: "Sistema de Gestión de Blogs",
    subtitle: "Angular + ASP.NET Core",
    description:
      "Plataforma para crear y administrar entradas de blog, con frontend en Angular, API REST en ASP.NET Core, EF Core, SQL Server y documentación con Swagger.",
    url: "https://github.com/edwinrhc/codepulse-platform",
    color: "indigo",
    icon: "fa-solid fa-pen-nib",
    tags: ["Angular 17", "C#", "ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
    featured: true,
  },
  {
    title: "MyPaw",
    subtitle: "Servicios para mascotas",
    description:
      "Plataforma estilo Airbnb para mascotas donde usuarios pueden contratar cuidadores para alojamiento o servicios. Backend con Express, Sequelize y MySQL.",
    url: "https://github.com/edwinrhc/mypaw",
    color: "purple",
    icon: "fa-solid fa-paw",
    tags: ["Node.js", "Express", "Sequelize", "MailTrap", "MySQL"],
    featured: true,
  },
  {
    title: "ProJU",
    subtitle: "Gestión de procesos judiciales",
    description:
      "Sistema para la gestión de casos legales con backend en Java, Spring Boot, vistas con Thymeleaf e integración con base de datos Oracle.",
    url: "https://github.com/edwinrhc/ProJU",
    color: "blue",
    icon: "fa-solid fa-scale-balanced",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Oracle"],
    featured: false,
  },
  {
    title: "Consulta y Carga Masiva",
    subtitle: "Sistema institucional",
    description:
      "Aplicación para registro, consulta y carga masiva de archivos con seguridad, persistencia en Oracle y visualización con Thymeleaf y Tailwind CSS.",
    url: "https://github.com/edwinrhc/sifonavic8",
    color: "emerald",
    icon: "fa-solid fa-file-import",
    tags: ["Spring Boot", "Spring Security", "JPA", "MyBatis", "Oracle", "Thymeleaf"],
    featured: false,
  },
];

export const colorClasses = {
  amber: {
    border: "group-hover:border-amber-500",
    title: "group-hover:text-amber-300",
    pill: "bg-amber-900/30 text-amber-300",
  },
  yellow: {
    border: "group-hover:border-yellow-500",
    title: "group-hover:text-yellow-300",
    pill: "bg-yellow-900/30 text-yellow-300",
  },
  green: {
    border: "group-hover:border-green-500",
    title: "group-hover:text-green-300",
    pill: "bg-green-900/30 text-green-300",
  },
  indigo: {
    border: "group-hover:border-indigo-500",
    title: "group-hover:text-indigo-300",
    pill: "bg-indigo-900/30 text-indigo-300",
  },
  purple: {
    border: "group-hover:border-purple-500",
    title: "group-hover:text-purple-300",
    pill: "bg-purple-900/30 text-purple-300",
  },
  blue: {
    border: "group-hover:border-blue-500",
    title: "group-hover:text-blue-300",
    pill: "bg-blue-900/30 text-blue-300",
  },
  emerald: {
    border: "group-hover:border-emerald-500",
    title: "group-hover:text-emerald-300",
    pill: "bg-emerald-900/30 text-emerald-300",
  },
} as const;
