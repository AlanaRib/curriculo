/* ==================================================
   TRADUÇÕES DO CURRÍCULO
   A página sempre inicia em português; a seleção não é salva.
================================================== */

const translations = {
    pt: {
        documentTitle: "Currículo — Alana Cristina de Moraes Ribeiro",
        documentDescription: "Currículo de Alana Cristina de Moraes Ribeiro: experiência em suporte técnico, automação de processos, integrações e desenvolvimento web.",
        languageSelector: "Selecionar idioma",
        resumeLabel: "Currículo",
        contactHeading: "Contato",
        introOne: "Técnica de Informática e estudante de Análise e Desenvolvimento de Sistemas, com experiência em suporte técnico, automação de processos e integração de sistemas.",
        introTwo: "Desenvolvo fluxos em n8n e soluções com APIs e inteligência artificial. Tenho especial interesse em desenvolvimento web, com prática em HTML, CSS e JavaScript.",
        location: "Curitiba — PR",
        experienceHeading: "Experiência profissional",
        ltslMeta: "04/2025 — Atual · Técnica de Informática",
        ltslDescription: "Iniciei na LTSL como estagiária e fui efetivada como Técnica de Informática. Atuo no suporte aos usuários e no desenvolvimento de automações e integrações para os processos da empresa.",
        contactLabel: "Contato:",
        emailLabel: "E-mail:",
        ltslBulletOne: "Desenvolvimento de agente de atendimento com IA em n8n para classificar solicitações, extrair dados de mensagens e encaminhar demandas aos fluxos responsáveis.",
        ltslBulletTwo: "Criação de fluxos para coleta e organização de dados de cotação, com identificação de informações pendentes e uso do histórico do atendimento.",
        ltslBulletThree: "Integração de APIs, incluindo WhatsApp da Meta e OpenAI, em fluxos de comunicação e atendimento.",
        ltslBulletFour: "Atendimento de chamados, suporte aos usuários e apoio à manutenção de hardware e infraestrutura.",
        ltslBulletFive: "Suporte e utilização dos sistemas Bitrix24, SSW e 3CX.",
        bomJesusMeta: "02/2025 — 04/2025 · Assistente Administrativo",
        bomJesusDescription: "Atuação como jovem aprendiz na unidade Água Verde, com apoio às rotinas administrativas e à organização de documentos.",
        bomJesusBulletOne: "Organização de documentos, contratos e notas fiscais.",
        bomJesusBulletTwo: "Acompanhamento e controle de despesas.",
        bomJesusBulletThree: "Utilização de Excel e Word nas rotinas administrativas.",
        educationHeading: "Formação",
        educationOneTitle: "Análise e Desenvolvimento de Sistemas",
        educationOneDate: "Conclusão prevista 12/2027",
        educationTwoTitle: "Assistente de Tecnologia da Informação",
        educationTwoDate: "Concluído 20/09/2022",
        educationThreeTitle: "Assistente Administrativo",
        educationThreeDate: "Concluído 20/09/2023",
        educationFourTitle: "Excel Completo",
        educationFourDate: "Concluído 07/06/2025",
        skillsHeading: "Competências",
        languagesHeading: "Idiomas",
        integrationsHeading: "Integrações",
        systemsHeading: "Sistemas",
        developmentHeading: "Desenvolvimento",
        languageItems: ["Inglês fluente", "Espanhol intermediário"],
        footerCredit: "Desenvolvido por Alana Cristina de Moraes Ribeiro",
        footerUpdated: "Última atualização em 28/10/2026"
    },
    en: {
        documentTitle: "Resume — Alana Cristina de Moraes Ribeiro",
        documentDescription: "Resume of Alana Cristina de Moraes Ribeiro: experience in technical support, process automation, system integrations, and web development.",
        languageSelector: "Select language",
        resumeLabel: "Resume",
        contactHeading: "Contact",
        introOne: "IT Support Technician and Systems Analysis and Development student with experience in technical support, process automation, and system integrations.",
        introTwo: "I build n8n workflows and solutions using APIs and artificial intelligence. I am particularly interested in web development, with hands-on experience in HTML, CSS, and JavaScript.",
        location: "Curitiba, Paraná, Brazil",
        experienceHeading: "Professional Experience",
        ltslMeta: "04/2025 — Present · IT Support Technician",
        ltslDescription: "I joined LTSL as an intern and was later hired as an IT Support Technician. My work covers user support and the development of automations and integrations for company processes.",
        contactLabel: "Phone:",
        emailLabel: "Email:",
        ltslBulletOne: "Develop an AI-powered service agent in n8n to classify requests, extract data from messages, and route inquiries to the appropriate workflows.",
        ltslBulletTwo: "Build workflows to collect and organize freight quotation data, identify missing information, and use the conversation history.",
        ltslBulletThree: "Integrate APIs, including Meta's WhatsApp API and OpenAI, into communication and customer service workflows.",
        ltslBulletFour: "Handle support tickets, assist users, and help maintain hardware and IT infrastructure.",
        ltslBulletFive: "Provide support for and work with Bitrix24, SSW, and 3CX.",
        bomJesusMeta: "02/2025 — 04/2025 · Administrative Assistant",
        bomJesusDescription: "Worked as a young apprentice at the Água Verde campus, supporting administrative routines and document organization.",
        bomJesusBulletOne: "Organized documents, contracts, and invoices.",
        bomJesusBulletTwo: "Monitored and tracked expenses.",
        bomJesusBulletThree: "Used Excel and Word in administrative routines.",
        educationHeading: "Education & Training",
        educationOneTitle: "Technology Degree in Systems Analysis and Development",
        educationOneDate: "Expected graduation: Dec 2027",
        educationTwoTitle: "Information Technology Assistant",
        educationTwoDate: "Completed: Sep 20, 2022",
        educationThreeTitle: "Administrative Assistant",
        educationThreeDate: "Completed: Sep 20, 2023",
        educationFourTitle: "Excel — Comprehensive Training",
        educationFourDate: "Completed: Jun 7, 2025",
        skillsHeading: "Technical Skills",
        languagesHeading: "Languages",
        integrationsHeading: "APIs & Integrations",
        systemsHeading: "Business Systems",
        developmentHeading: "Development & Automation",
        languageItems: ["English — Fluent", "Spanish — Intermediate", "Portuguese (Brazil) — Fluent"],
        footerCredit: "Developed by Alana Cristina de Moraes Ribeiro",
        footerUpdated: "Last updated: October 28, 2026"
    }
};

/* Guarda o texto inicial de português no HTML e aplica as traduções ao trocar. */
function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "pt";
    const content = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage === "en" ? "en-US" : "pt-BR";
    document.title = content.documentTitle;
    document.querySelector('meta[name="description"]').content = content.documentDescription;
    document.querySelector('meta[property="og:title"]').content = content.documentTitle;
    document.querySelector('meta[property="og:description"]').content = content.documentDescription;
    document.querySelector('meta[property="og:locale"]').content = selectedLanguage === "en" ? "en_US" : "pt_BR";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (Object.prototype.hasOwnProperty.call(content, key)) {
            element.textContent = content[key];
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const key = element.dataset.i18nAriaLabel;
        if (Object.prototype.hasOwnProperty.call(content, key)) {
            element.setAttribute("aria-label", content[key]);
        }
    });

    const languageList = document.getElementById("language-list");
    languageList.replaceChildren();

    content.languageItems.forEach((languageName) => {
        const item = document.createElement("li");
        item.textContent = languageName;
        languageList.appendChild(item);
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.language === selectedLanguage));
    });
}

document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

/* Sempre começa em português, sem localStorage ou preferência persistida. */
setLanguage("pt");

/* Indicador de rolagem: mede em eventos e anima apenas enquanto necessário. */
const scrollLine = document.querySelector(".scroll-line");
const scrollLight = document.querySelector(".scroll-light");
const scrollTrail = document.querySelector(".scroll-trail");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentPosition = 0;
let targetPosition = 0;
let lineHeight = 0;
let maxScroll = 0;
let frameId = null;
let trailTimeout;
let currentScrollY = window.scrollY;
let lastFrameTime = null;

function renderLight() {
    scrollLight.style.transform = `translate(-50%, -50%) translateY(${currentPosition}px)`;
}

function animateLight(time) {
    frameId = null;
    const elapsed = lastFrameTime === null ? 1000 / 60 : Math.min(time - lastFrameTime, 64);
    lastFrameTime = time;
    currentPosition += (targetPosition - currentPosition) * (1 - Math.pow(0.84, elapsed / (1000 / 60)));
    if (Math.abs(targetPosition - currentPosition) < 0.05) {
        currentPosition = targetPosition;
        lastFrameTime = null;
    } else {
        frameId = requestAnimationFrame(animateLight);
    }
    renderLight();
}

function updateScrollPosition(immediate = false) {
    const progress = maxScroll > 0 ? Math.max(0, Math.min(window.scrollY / maxScroll, 1)) : 0;
    targetPosition = progress * lineHeight;
    if (immediate || reducedMotion.matches) {
        if (frameId !== null) cancelAnimationFrame(frameId);
        frameId = null;
        lastFrameTime = null;
        currentPosition = targetPosition;
        renderLight();
    } else if (frameId === null && Math.abs(targetPosition - currentPosition) >= 0.05) {
        frameId = requestAnimationFrame(animateLight);
    }
}

function measureScroll() {
    lineHeight = Math.max(0, scrollLine.clientHeight - scrollLight.offsetHeight);
    maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    updateScrollPosition(true);
}

function clearTrail() {
    clearTimeout(trailTimeout);
    scrollLine.classList.remove("is-scrolling");
}

window.addEventListener("scroll", () => {
    const velocity = Math.min(Math.abs(window.scrollY - currentScrollY), 100);
    currentScrollY = window.scrollY;
    updateScrollPosition();
    if (reducedMotion.matches || document.hidden) return;
    scrollTrail.style.height = `${Math.min(12 + velocity * 0.35, 48)}px`;
    scrollTrail.style.transform = `translateX(-50%) translateY(${targetPosition}px)`;
    scrollLine.classList.add("is-scrolling");
    clearTimeout(trailTimeout);
    trailTimeout = setTimeout(clearTrail, 120);
}, { passive: true });

window.addEventListener("resize", measureScroll);
window.addEventListener("pageshow", measureScroll);
reducedMotion.addEventListener("change", () => {
    clearTrail();
    measureScroll();
});
document.addEventListener("visibilitychange", () => {
    clearTrail();
    updateScrollPosition(true);
});

// Inclui mudanças causadas por traduções, fontes e expansão das experiências.
if ("ResizeObserver" in window) {
    new ResizeObserver(measureScroll).observe(document.body);
}
document.querySelectorAll("details").forEach((item) => item.addEventListener("toggle", measureScroll));
document.fonts.ready.then(measureScroll);
measureScroll();

/* Abre as experiências para impressão e restaura a seleção ao terminar. */
let printDetails = null;
window.addEventListener("beforeprint", () => {
    if (printDetails !== null) return;
    printDetails = Array.from(document.querySelectorAll("details"), (item) => ({ item, open: item.open }));
    printDetails.forEach(({ item }) => { item.open = true; });
});
window.addEventListener("afterprint", () => {
    if (printDetails === null) return;
    printDetails.forEach(({ item, open }) => { item.open = open; });
    printDetails = null;
    measureScroll();
});
