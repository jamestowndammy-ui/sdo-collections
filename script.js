/*
  SDO COLLECTIONS WEBSITE SETTINGS
  1. Replace the WhatsApp number below with the business number, including country code.
     Example Nigeria: 2348012345678 (do not include +, spaces or dashes).
  2. Save and upload the updated files to GitHub.
*/
const WHATSAPP_NUMBER = "2340000000000"; // CHANGE THIS to the owner's real WhatsApp number
const DEFAULT_MESSAGE = "Hello SDO Collections, please share your available products and prices.";

function makeWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = makeWhatsAppUrl(DEFAULT_MESSAGE);
  link.addEventListener("click", event => {
    if (WHATSAPP_NUMBER === "2340000000000") {
      event.preventDefault();
      alert("The website is ready, but the SDO Collections WhatsApp number has not been added yet. Open script.js and replace the placeholder number with the real business number.");
    }
  });
});

document.querySelectorAll("[data-product]").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    if (WHATSAPP_NUMBER === "2340000000000") {
      alert(`The ${product} collection is ready to feature. Add the real WhatsApp number in script.js to activate customer enquiries.`);
      return;
    }
    const message = `Hello SDO Collections, I would like to ask about ${product}. Please share available designs, sizes and prices.`;
    window.open(makeWhatsAppUrl(message), "_blank", "noopener");
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));
