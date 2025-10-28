const nameText = "Misrak Seneserat-Ayele_";
const titleText = "Multimedia Artist";

let i = 0, j = 0;
const speed = 80;

function typeName() {
  if (i < nameText.length) {
    document.getElementById("typing-name").textContent += nameText.charAt(i++);
    setTimeout(typeName, speed);
  } else {
    setTimeout(typeTitle, 300);
  }
}

function typeTitle() {
  if (j < titleText.length) {
    document.getElementById("typing-title").textContent += titleText.charAt(j++);
    setTimeout(typeTitle, speed);
  }
}

typeName();
