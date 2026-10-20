const summonButton = document.querySelector("#summonButton");
const consoleMessage = document.querySelector("#consoleMessage");
const consoleState = document.querySelector("#consoleState");
const progressBar = document.querySelector("#progressBar");
const toast = document.querySelector("#toast");
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector(".site-header nav");

const ritualSteps = [
  { progress: 18, state: "PREPARANDO", message: "Desenhando o círculo mágico com pixels, esperança e uma quantidade questionável de café..." },
  { progress: 42, state: "INSCRIBINDO RUNAS", message: "Compilando encantamentos antigos em JavaScript moderno..." },
  { progress: 68, state: "ABRINDO PORTAL", message: "Sincronizando os planos de existência. Se ouvir um som de aldeão, mantenha a calma." },
  { progress: 91, state: "SINAL DETECTADO", message: "Uma entidade quadrada está atravessando a matriz..." },
  { progress: 100, state: "INVocAÇÃO CONCLUÍDA", message: "STEVE ESTÁ AQUI. Ele ainda não sabe o que é imposto de renda, mas está aprendendo." }
];

let ritualRunning = false;
let toastTimeout;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3500);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function summonSteve() {
  if (ritualRunning) return;
  ritualRunning = true;
  summonButton.disabled = true;
  summonButton.innerHTML = "<span>◌</span> Ritual em andamento...";
  document.body.classList.add("invoking");
  consoleMessage.textContent = "O ritual começou. Não feche o portal.";
  consoleState.textContent = "INICIALIZANDO";
  progressBar.style.width = "4%";
  document.querySelector("#console").scrollIntoView({ behavior: "smooth", block: "center" });

  for (const step of ritualSteps) {
    await wait(850);
    progressBar.style.width = `${step.progress}%`;
    consoleState.textContent = step.state;
    consoleMessage.textContent = step.message;
  }

  await wait(500);
  document.body.classList.remove("invoking");
  summonButton.disabled = false;
  summonButton.innerHTML = "<span>✧</span> Invocar novamente";
  ritualRunning = false;
  showToast("✨ Steve foi invocado! (A magia é visual; a integração real vem depois.)");
}

summonButton.addEventListener("click", summonSteve);

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Pequenos detalhes de encantamento ao clicar nas runas e cartões.
document.querySelectorAll(".rune-card").forEach((card, index) => {
  card.addEventListener("pointerenter", () => {
    card.style.setProperty("--rune-glow", `${index + 1}`);
  });
});

document.querySelectorAll('a[href^="https://github.com/steve-ai"]').forEach(link => {
  link.addEventListener("click", () => {
    // Substitua a URL pelo endereço real da organização ou repositório.
  });
});
