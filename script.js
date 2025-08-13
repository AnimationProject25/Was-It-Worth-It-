// Create grid labels dynamically
for (let i = 0; i <= 100; i += 10) {
  const hLabel = document.createElement('div');
  hLabel.className = 'grid-label';
  hLabel.style.left = `${i}vw`;
  hLabel.style.top = '0';
  hLabel.innerText = `${i}vw`;
  document.addEventListener('DOMContentLoaded', () =>
    document.getElementById('world').appendChild(hLabel)
  );

  const vLabel = document.createElement('div');
  vLabel.className = 'grid-label';
  vLabel.style.top = `${i}vh`;
  vLabel.style.left = '0';
  vLabel.innerText = `${i}vh`;
  document.addEventListener('DOMContentLoaded', () =>
    document.getElementById('world').appendChild(vLabel)
  );
}

// Grab slides
const slides = document.querySelectorAll(".slide");
const counter = document.getElementById("counter");
const dots = document.getElementById("dots");
let currentSlide = 0;


// GSAP animation helpers
function animateScene(slideIndex) {
  gsap.killTweensOf("*"); // stop previous animations

  switch (slideIndex) {
    case 0: // Slide 1
      gsap.to("#PC", { x: "0vw", duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1  });
      gsap.to("#script", { rotation: 0, transformOrigin: "bottom", duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.72  });
      gsap.to("#table", { y: "0vh", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1.5  });
      gsap.to("#bed", { y: "0vh", duration: 0, repeat: 0, yoyo: true, ease: "sine.inOut", scale: 1.5 });
      gsap.to("window", { y: "0vh", duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.1 });
      break;



    case 1: // Slide 2
      gsap.to("#toilet", { x: "60vw", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#shower", { y: "2vh", duration: 0, repeat: -5, yoyo: true, ease: "sine.inOut", scale: 0.5 });
      gsap.to("#script02", { y: 0, duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1.5 });
      gsap.to("#sink", { y: 0, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1 });
      gsap.to("#bathtub", { y: 0, duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      break;
    case 2: // Slide 3
      gsap.to("#sun", { x: "40vw", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#sign", { y: "-8vh", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#sky", { y: "2vh", duration: 0, repeat: -5, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#Man", { y: "2vh", duration: 0, repeat: -5, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#script03", { y: "2vh", duration: 0, repeat: -5, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      break;
    case 3: // Slide 4
      gsap.to("#egg", { y: "-6vh", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      gsap.to("#script04", { rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1.5 });
      gsap.to("#steak", { rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#unusedhobs", { rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut" });
      break;
    case 4: // Slide 5
      gsap.to("#pullups", { x: "30vw", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 1.4 });
      gsap.to("#randomexercise", { y: "-2vh", duration: 0, repeat: -3, yoyo: true, ease: "sine.inOut", rotation: 2, transformOrigin: "bottom" });
      gsap.to("#script05", { y: "2vh", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#pushups", { y: "2vh", opacity: 0, rotation: 2, transformOrigin: "bottom", duration: 100, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#MC", { y: "2vh", rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut", scale: 0.67 });
      break;
    case 5: // Slide 6
      gsap.to("#first", { y: "35vh", x: "10vw", duration: 0, repeat: 0, yoyo: true, ease: "sine.inOut" });
      gsap.to("#third", { y: "1vh",  rotation: 4, transformOrigin: "bottom", duration: 0, repeat: 100, yoyo: true, ease: "sine.inOut" });
      gsap.to("#second", { y: "2vh", opacity: 0.3, rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to("#script06", { y: "2vh", opacity: 0.3, rotation: 2, transformOrigin: "bottom", duration: 0, repeat: -1, yoyo: true, ease: "sine.inOut" });
      break;
    
  }
}

// Update slides when navigating
function updateSlides() {
  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
  counter.textContent = `${currentSlide + 1}/${slides.length}`;
  updateDots();
  animateScene(currentSlide);
 const storyText = document.getElementById("story-text");
gsap.to(storyText, { opacity: 0, duration: 0.3, onComplete: () => {
  storyText.textContent = storyScript[currentSlide];
  gsap.to(storyText, { opacity: 1, duration: 1 });
}});

}

// Update navigation dots
function updateDots() {
  dots.innerHTML = "";
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (i === currentSlide) {
      dot.classList.add("active");
      gsap.fromTo(dot, { scale: 0.8 }, { scale: 1.2, duration: 0.4, ease: "back.out(1.7)" });
    }

    // Make the dot clickable
    dot.addEventListener("click", () => {
      currentSlide = i;
      updateSlides();
    });

    dots.appendChild(dot);
  }
}

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
  gsap.to(prevButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
});

nextButton.addEventListener("click", () => {
  gsap.to(nextButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
});

// Navigation controls
document.getElementById("prev").addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlides();
  }
});
document.getElementById("next").addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlides();
  }
});

// Initialize
updateSlides();

// Background music auto-play on first click
document.body.addEventListener("click", function startMusic() {
  const music = document.getElementById("bg-music");
  music.volume = 0.3;
  music.play();
  document.body.removeEventListener("click", startMusic);
});

// Toggle mute
document.getElementById("mute-btn").addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.muted = !music.muted;
  document.getElementById("mute-btn").textContent = music.muted ? "🔇 Unmute" : "🔊 Mute";
});

// Keyboard support: use left/right arrows to navigate slides
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlides();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlides();
    }
  }
});

