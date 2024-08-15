document.addEventListener("DOMContentLoaded", function() {
    const langElements = document.querySelectorAll('.lang');
    const langBtns = document.querySelectorAll('.lang-btn');

    const translations = {
        en: {
            home: "Home",
            features: "Features",
            subscribe: "Contact",
            welcome: "Welcome to Ayares & Utreras Consultores",
            intro: "Explore our features and subscribe for more information.",
            subscribeNow: "Contact us",
            featuresTitle: "About us",
            feature1Title: "Feature 1",
            feature1Desc: "Description of feature 1.",
            feature2Title: "Feature 2",
            feature2Desc: "Description of feature 2.",
            feature3Title: "Feature 3",
            feature3Desc: "Description of feature 3.",
            subscribeTitle: "Subscribe to Our Newsletter",
            emailLabel: "Email Address:",
            subscribeButton: "Subscribe"
        },
        es: {
            home: "Inicio",
            features: "Sobre nosotros",
            subscribe: "Contacto",
            welcome: "Bienvenido a Ayares & Utreras Consultores",
            intro: "Explora nuestras características y contactate con nosotros para más información.",
            subscribeNow: "Suscríbete Ahora",
            featuresTitle: "Características",
            feature1Title: "Característica 1",
            feature1Desc: "Descripción de la característica 1.",
            feature2Title: "Característica 2",
            feature2Desc: "Descripción de la característica 2.",
            feature3Title: "Característica 3",
            feature3Desc: "Descripción de la característica 3.",
            subscribeTitle: "Contacto",
            emailLabel: "Correo Electrónico:",
            subscribeButton: "Suscribirse"
        }
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id;
            changeLanguage(lang);
        });
    });

    function changeLanguage(lang) {
        langElements.forEach(element => {
            const key = element.getAttribute('data-key');
            element.textContent = translations[lang][key];
        });
    }

    // Por defecto, carga la página en español
    changeLanguage('es');
});
