const phrases = [
  "Futur Étudiant BUT Informatique",
  "Passioné par le Developpement",
  "Bienvenue sur mon Portfolio",
  "Hello, I'm the Next Developer"
];

const element = document.getElementById("typewriter");

const themeSwitch = document.getElementById("theme-switch");

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
    themeSwitch.classList.toggle("active");
});