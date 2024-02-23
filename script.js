const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (event) => {
  const activePanel = event.target.closest(".accordion__panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

const toggleAccordion = (panel) => {
  const triggers = panel.parentElement.querySelectorAll(".accordion__trigger");
  const currentContent = panel.querySelector(".accordion__content");
  const currentTrigger = panel.querySelector(".accordion__trigger");
  const currentIcon = currentTrigger.querySelector("i");
  const isExpanded = currentTrigger.getAttribute("aria-expanded") === "true";

  triggers.forEach((trigger) => {
    if (trigger !== currentTrigger) {
      trigger.setAttribute("aria-expanded", "false");
      trigger
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
      trigger
        .closest(".accordion__panel")
        .querySelector(".accordion__content")
        .setAttribute("hidden", "");
    }
  });

  if (isExpanded) {
    currentTrigger.setAttribute("aria-expanded", "false");
    currentContent.setAttribute("hidden", "");
    currentIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
  } else {
    currentTrigger.setAttribute("aria-expanded", "true");
    currentContent.removeAttribute("hidden");
    currentIcon.classList.replace("fa-chevron-down", "fa-chevron-up");
  }
};
