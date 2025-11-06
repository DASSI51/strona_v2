// ======= FADE-IN ANIMATION FOR SECTIONS =======
const sections = document.querySelectorAll("section, .hero");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// ======= PRICING CARD EXPAND =======
document.querySelectorAll(".pricing-card").forEach(card => {
  card.addEventListener("click", () => {
    const isExpanded = card.classList.contains("expanded");
    document.querySelectorAll(".pricing-card").forEach(c => c.classList.remove("expanded"));
    if (!isExpanded) {
      card.classList.add("expanded");
    }
  });
});

// ======= PAUSE OTHER AUDIOS =======
document.addEventListener("play", e => {
  const audios = document.querySelectorAll("audio");
  audios.forEach(a => { if (a !== e.target) a.pause(); });
}, true);

// ======= SAFE YEAR UPDATE (only if footer added later) =======
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
