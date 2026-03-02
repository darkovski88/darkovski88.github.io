const yearNode = document.querySelector("#year");
const appCards = Array.from(document.querySelectorAll(".app-card"));
const revealNodes = Array.from(document.querySelectorAll(".reveal"));

const spotlight = {
  kicker: document.querySelector("#spotlight-kicker"),
  title: document.querySelector("#spotlight-title"),
  description: document.querySelector("#spotlight-description"),
  format: document.querySelector("#spotlight-format"),
  audience: document.querySelector("#spotlight-audience"),
  cue: document.querySelector("#spotlight-cue"),
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const updateSpotlight = (card) => {
  const { kicker, title, description, format, audience, cue } = card.dataset;

  spotlight.kicker.textContent = kicker;
  spotlight.title.textContent = title;
  spotlight.description.textContent = description;
  spotlight.format.textContent = format;
  spotlight.audience.textContent = audience;
  spotlight.cue.textContent = cue;

  appCards.forEach((item) => {
    item.classList.remove("app-card-active");
    item.setAttribute("aria-pressed", "false");
  });

  card.classList.add("app-card-active");
  card.setAttribute("aria-pressed", "true");
};

appCards.forEach((card) => {
  card.addEventListener("click", () => updateSpotlight(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      updateSpotlight(card);
    }
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
