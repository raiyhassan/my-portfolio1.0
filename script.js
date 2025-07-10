// Entry Animation
window.addEventListener('DOMContentLoaded', () => {
    const entryOverlay = document.getElementById('entry-overlay');
    const entryDot = document.getElementById('entry-dot');
    const entryLogo = document.getElementById('entry-logo');
    const dockedLogo = document.getElementById('docked-logo');
  
    // Step 1: Dot grows
    setTimeout(() => {
      entryDot.classList.add('grow');
      // Step 2: Logo appears
      setTimeout(() => {
        entryLogo.classList.add('visible');
        // Step 3: Dot shrinks and slides to corner
        setTimeout(() => {
          entryDot.classList.remove('grow');
          entryDot.classList.add('shrink');
          // Step 4: Show docked logo
          dockedLogo.classList.add('visible');
          // Step 5: Fade out overlay
          setTimeout(() => {
            entryOverlay.style.opacity = 0;
            setTimeout(() => {
              entryOverlay.style.display = 'none';
              // Animate in main sections
              revealSections();
            }, 600);
          }, 800);
        }, 900);
      }, 400);
    }, 200);
  });
  
  // Section reveal on load and scroll
  function revealSections() {
    const sections = document.querySelectorAll('main section');
    const reveal = () => {
      const trigger = window.innerHeight * 0.85;
      sections.forEach((sec, i) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < trigger) {
          setTimeout(() => sec.classList.add('visible'), i * 120);
        }
      });
    };
    reveal();
    window.addEventListener('scroll', reveal);
  }
  
  // Set current year in footer
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
  });
  const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
sections.forEach(section => observer.observe(section));
document.querySelectorAll(".case-card img").forEach((img) => {
    img.addEventListener("click", () => {
      const modal = document.getElementById("image-modal");
      const modalImg = document.getElementById("modal-img");
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });
  
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("image-modal").style.display = "none";
  });
  // Sound on Button Click
const clickSound = new Audio("assets/click.mp3");

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
} else {
  body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.replace("dark-mode", "light-mode");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light-mode", "dark-mode");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});
