// Fade-in animation for sections
const sections = document.querySelectorAll("section, .hero");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Pricing Card Expand
document.querySelectorAll(".pricing-card").forEach(card => {
  card.addEventListener("click", () => {
    const isExpanded = card.classList.contains("expanded");
    document.querySelectorAll(".pricing-card").forEach(c => c.classList.remove("expanded"));
    if (!isExpanded) {
      card.classList.add("expanded");
    }
  });
});

// Pause other audios
document.addEventListener("play", e => {
  const audios = document.querySelectorAll("audio");
  audios.forEach(a => { if (a !== e.target) a.pause(); });
}, true);

// Year auto-update
document.getElementById("year").textContent = new Date().getFullYear();
