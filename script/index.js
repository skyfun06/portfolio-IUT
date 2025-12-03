const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY <= 80) {
        header.classList.add("top");
    } else {
        header.classList.remove("top");
    }
});

const phrases = [
    "Futur Étudiant BUT Informatique",
    "Passioné par le Developpement",
    "Bienvenue sur mon Portfolio",
    "Hello, I'm the Next Developer"
];

const element = document.getElementById("typewriter");

const themeSwitch = document.getElementById("theme-switch");
const icon = document.querySelector(".thumb")
let dark = false 

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting) {
        // tape le texte
        element.textContent = currentPhrase.slice(0, charIndex++);
    } else {
        // efface
        element.textContent = currentPhrase.slice(0, charIndex--);
    }

    // Quand la phrase est finie → commence à effacer
    if (charIndex === currentPhrase.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause avant d'effacer
        return;
    }

    // Quand tout est effacé → phrase suivante
    if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    // vitesse d'écriture / effacement
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();

themeSwitch.addEventListener("click", () => {
    dark = !dark;

    themeSwitch.classList.toggle("active");

    const moonSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
    `;

    const sunSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    `;

    if (dark) {
      icon.innerHTML = moonSvg
      document.body.classList.toggle("dark");
    } else {
      icon.innerHTML = sunSvg
      document.body.classList.toggle("dark");
    }

    
});