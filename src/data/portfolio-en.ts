export const stackCategoriesEn = [
  {
    title: "Languages",
    icon: "fa-solid fa-code",
    items: ["Java", "TypeScript", "JavaScript", "C#", "Python", "SQL"],
  },
  {
    title: "Backend and frameworks",
    icon: "fa-solid fa-server",
    items: ["Spring Boot", "Spring Security", "Spring Cloud", "Node.js", "NestJS", "ASP.NET Core"],
  },
  {
    title: "Architecture and design",
    icon: "fa-solid fa-layer-group",
    items: ["REST APIs", "Microservices", "Layered architecture", "JWT", "Role-based access"],
  },
  {
    title: "Databases",
    icon: "fa-solid fa-database",
    items: ["Oracle", "MySQL", "SQL Server", "JPA / Hibernate", "EF Core"],
  },
  {
    title: "DevOps and infrastructure",
    icon: "fa-solid fa-cloud",
    items: ["Docker", "Docker Compose", "CI/CD", "JBoss", "Linux"],
  },
  {
    title: "Testing and tools",
    icon: "fa-solid fa-screwdriver-wrench",
    items: ["JUnit", "Mockito", "Swagger", "Postman", "Git", "GitHub"],
  },
];

export const experiencesEn = [
  {
    period: "2020 - Present",
    role: "Application Developer",
    company: "Secretaría Técnica AD HOC - PCM",
    organization: "Presidency of the Council of Ministers - Government of Peru",
    url: "https://www.gob.pe/fonavi-st",
    description: [
      "Development and maintenance of internal institutional systems for information management and administrative processes.",
      "Backend implementation with Java and Spring Boot, including authentication, business validations and access control.",
      "Participation in legacy modernization, critical process optimization, technical documentation and production support.",
    ],
    tags: ["Java", "Spring Boot", "Oracle", "JBoss", "Visual Basic", "Legacy systems"],
  },
  {
    period: "March - May 2024",
    role: "Developer",
    company: "Socius Perú SAC",
    organization: "Low-code solutions and system integration consulting",
    url: "https://sociuscorp.com/",
    description: [
      "Development and integration of REST APIs with C# to connect low-code platforms with external systems.",
      "Automation and scraping workflows with Python, BeautifulSoup and Scrapy to improve data collection and processing.",
      "Collaboration with multidisciplinary teams, focusing on integration, documentation and technical delivery.",
    ],
    tags: ["C#", "Python", "REST APIs", "BeautifulSoup", "Scrapy"],
  },
];

export const projectsEn = [
  {
    title: "Mass File Validator",
    subtitle: "Oracle Forms to VB.NET migration",
    description:
      "Modernization of a legacy Oracle Forms 6 system into a VB.NET desktop application for processing massive TXT files. Processing time was reduced from about 25 minutes to 2 minutes through code reengineering, memory optimization and automatic report generation.",
    url: "https://github.com/edwinrhc/VALIDADOR_TEST",
    color: "amber",
    icon: "fa-solid fa-folder-open",
    tags: ["Visual Basic .NET", "Oracle", "iTextSharp", "OpenXML", "SpreadsheetLight"],
    featured: true,
  },
  {
    title: "Order Management System",
    subtitle: "Microservices for e-commerce",
    description:
      "Backend based on microservices architecture for an online store, with product, order, user and payment services. Includes Spring Cloud, Eureka, Feign Client and Docker.",
    url: "https://github.com/edwinrhc/ecomerce-microservices",
    color: "yellow",
    icon: "fa-solid fa-cart-shopping",
    tags: ["Java 17", "Spring Boot 3", "Spring Cloud", "Eureka", "Feign Client", "Docker"],
    featured: true,
  },
  {
    title: "Medical Appointment System",
    subtitle: "Secure backend with payments",
    description:
      "Application for managing medical appointments with JWT authentication, role-based access, Stripe payment integration and Dockerized deployment.",
    url: "https://github.com/edwinrhc/clinic-appointment-system",
    color: "green",
    icon: "fa-solid fa-hospital",
    tags: ["Java", "Spring Boot", "JWT", "Stripe", "Docker"],
    featured: true,
  },
  {
    title: "Blog Management System",
    subtitle: "Angular + ASP.NET Core",
    description:
      "Platform for creating and managing blog posts, with an Angular frontend, ASP.NET Core REST API, EF Core, SQL Server and Swagger documentation.",
    url: "https://github.com/edwinrhc/codepulse-platform",
    color: "indigo",
    icon: "fa-solid fa-pen-nib",
    tags: ["Angular 17", "C#", "ASP.NET Core", "EF Core", "SQL Server", "Swagger"],
    featured: true,
  },
  {
    title: "MyPaw",
    subtitle: "Pet services platform",
    description:
      "Airbnb-style platform for pets where users can hire sitters for lodging or services. Backend built with Express, Sequelize and MySQL.",
    url: "https://github.com/edwinrhc/mypaw",
    color: "purple",
    icon: "fa-solid fa-paw",
    tags: ["Node.js", "Express", "Sequelize", "MailTrap", "MySQL"],
    featured: true,
  },
];
