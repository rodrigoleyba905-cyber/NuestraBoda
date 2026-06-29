document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los elementos que tienen la clase 'fade'
    const faders = document.querySelectorAll('.fade');

    const appearOptions = {
        threshold: 0.15, // Se activa cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Le agregamos la clase 'show' que le da opacity: 1 en tu CSS
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Forzamos a que la primera sección (Hero) aparezca de inmediato sin tener que hacer scroll
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('show');
    }
});
// ================= CONTEO REGRESIVO =================
// Configuramos la fecha exacta del evento
const weddingDate = new Date("October 3, 2026 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Si la fecha ya pasó (el día de la boda), mantenemos el reloj en cero
    if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        return;
    }

    // Cálculos matemáticos para días, horas y minutos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Formateamos los números para que siempre tengan dos dígitos (ej. "09" en lugar de "9")
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
};

// Ejecutamos la función inmediatamente para que no salgan los "00" al cargar la página
updateCountdown();
// Actualizamos el reloj cada 60,000 milisegundos (1 minuto)
setInterval(updateCountdown, 60000); 


// ================= BOTÓN RSVP =================
// Esta es la función que llama tu botón en el HTML (onclick="confirmarAsistencia()")
function confirmarAsistencia() {
    const msg = document.getElementById("confirmation-msg");
    const btn = document.getElementById("rsvp-btn");
    
    // Cambiamos el display de 'none' a 'block' para mostrar el mensaje
    msg.style.display = "block";
    
    // Cambiamos el texto y el color del botón para dar retroalimentación visual
    btn.innerText = "¡Confirmado!";
    btn.style.backgroundColor = "#b8860b"; /* Un dorado más oscuro para indicar que ya se presionó */
    
    // Desactivamos el botón para que no lo puedan presionar varias veces
    btn.disabled = true;
    btn.style.cursor = "default";
}