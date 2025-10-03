// Typing effect for Home Page
const text = "Aspiring AI & ML Engineer | Developer | Innovator";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.onload = typeWriter;

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
let slideIndex = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".project-slide").length;

// Next / Prev buttons
document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

// Auto slide every 4 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlide();
}, 4000);

function updateSlide() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
