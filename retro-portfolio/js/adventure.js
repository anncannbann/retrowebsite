const buttons = document.querySelectorAll(".screen-buttons button");
const screen = document.getElementById("screen");
const scene = document.getElementById("scene");

const scenes = {
  who: {
    title: "👤 Who I Am",
    content:
      "I'm a developer adventurer from Bangalore. I craft apps, build systems, and explore digital frontiers.",
  },
  skills: {
    title: "⚙️ My Skills",
    content:
      "Python, JavaScript, HTML, CSS, Django, Node.js, Angular, MongoDB — my gear for any quest.",
  },
  xp: {
    title: "🧠 Experience",
    content:
      "Turing (Senior Dev), American Express via TCS, Cadence Systems — my battle history.",
  },
  fun: {
    title: "🎨 Interests",
    content:
      "Game dev, drawing, guitar, and painting — hobbies that power my creativity.",
  },
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-screen");
    const data = scenes[key];
    screen.classList.add("hidden");
    scene.innerHTML = `
      <h1 class="screen-title">${data.title}</h1>
      <p class="screen-text">${data.content}</p>
      <button onclick="goBack()">⬅️ Go Back</button>
    `;
    scene.classList.remove("hidden");
  });
});

function goBack() {
  scene.classList.add("hidden");
  screen.classList.remove("hidden");
}
