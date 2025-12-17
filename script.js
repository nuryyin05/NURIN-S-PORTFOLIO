document.addEventListener("DOMContentLoaded", () => {
  // ============================
  // DARK MODE TOGGLE
  // ============================
  const darkToggle = document.getElementById("darkModeBtn");
  const lightBg = document.getElementById("bg-video-light");
  const darkBg = document.getElementById("bg-video-dark");

  const showLightVideo = () => {
    lightBg.classList.add("visible");
    darkBg.classList.remove("visible");
    darkToggle.textContent = "🌙 Dark Mode";
  };

  const showDarkVideo = () => {
    darkBg.classList.add("visible");
    lightBg.classList.remove("visible");
    darkToggle.textContent = "☀ Light Mode";
  };

  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    showDarkVideo();
  } else {
    showLightVideo();
  }

  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      showDarkVideo();
      localStorage.setItem("dark-mode", "enabled");
    } else {
      showLightVideo();
      localStorage.setItem("dark-mode", "disabled");
    }
  });

  // ============================
  // CONTACT NOTIFICATION
  // ============================
  const notifyBtn = document.getElementById("notifyBtn");
  notifyBtn?.addEventListener("click", () => {
    alert("Sample notification only. Form is not connected to a server.");
  });

  // ============================
  // PROFILE IMAGE HOVER
  // ============================
  const profileImg = document.getElementById("profileImg");
  if (profileImg) {
    profileImg.addEventListener("mouseenter", () => profileImg.style.transform = "scale(1.05)");
    profileImg.addEventListener("mouseleave", () => profileImg.style.transform = "scale(1)");
  }

  // ============================
  // SLIDESHOW ABOUT ME
  // ============================
  const aboutImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
  let aboutIndex = 0;
  const aboutImgTag = document.getElementById("aboutSlideshow");
  setInterval(() => {
    aboutIndex = (aboutIndex + 1) % aboutImages.length;
    aboutImgTag.src = aboutImages[aboutIndex];
  }, 2500);

  // ============================
  // LIVE DATE & TIME
  // ============================
  function updateDateTime() {
    const now = new Date();
    document.getElementById("datetime").textContent =
      now.toLocaleDateString("en-GB") + " | " + now.toLocaleTimeString();
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();

  // ============================
  // OPEN PROJECT LINK
  // ============================
  document.querySelectorAll(".open-site").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      window.open("https://your-live-site-link.com", "_blank");
    });
  });

  // ============================
  // SCROLL-BASED ANIMATIONS
  // ============================
  const scrollItems = [
    { elems: document.querySelectorAll(".card"), class: "show", stagger: 0 },
    { elems: [document.querySelector(".creative-boxes")], class: "show", stagger: 0 },
    { elems: [document.querySelector(".skills-list")], class: "show", stagger: 150, subElems: document.querySelectorAll(".skills-list li") }
  ];

  function handleScrollAnimations() {
    const windowHeight = window.innerHeight;
    scrollItems.forEach(item => {
      item.elems.forEach(elem => {
        if (!elem) return;
        const top = elem.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
          if (item.subElems) {
            elem.classList.add(item.class);
            item.subElems.forEach((subEl, idx) => {
              setTimeout(() => {
                subEl.style.opacity = "1";
                subEl.style.transform = "translateY(0)";
              }, idx * item.stagger);
            });
          } else {
            elem.classList.add(item.class);
          }
        }
      });
    });
  }

  window.addEventListener("scroll", handleScrollAnimations);
  handleScrollAnimations();

  // ============================
  // NAVBAR ACTIVE LINK ON SCROLL
  // ============================
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 160;
      if (pageYOffset >= top) current = section.id;
    });
    navLinks.forEach(a => {
      a.classList.remove("active");
      if (a.getAttribute("href") === "#" + current) a.classList.add("active");
    });
  });

  // ============================
  // EDUCATION SLIDESHOW AUTO SCROLL
  // ============================
  const eduScroll = document.querySelector('.education-slideshow');
  if (eduScroll) {
    let pos = 0;
    const speed = 4.0;

    function slideLoop() {
      pos += speed;
      if (pos >= eduScroll.scrollWidth - eduScroll.clientWidth) pos = 0;
      eduScroll.scrollLeft = pos;
      requestAnimationFrame(slideLoop);
    }
    slideLoop();
  }

  // ============================
  // FLEXIBLE CREATIVE BOX MODALS
  // ============================
  const modalButtons = document.querySelectorAll(".creative-box[data-target]");
  modalButtons.forEach(btn => {
    const targetId = btn.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    const closeBtn = modal.querySelector(".close");

    btn.addEventListener("click", () => modal.style.display = "block");
    closeBtn.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

});
const text = "✨WELCOME TO MY PORTFOLIO✨";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.addEventListener("load", typeEffect);

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".glass-navbar");
  nav.classList.toggle("scrolled", window.scrollY > 60);
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  document.querySelectorAll(".left-box, .right-box").forEach(box => {
    box.style.transform = `translate(${x}px, ${y}px)`;
  });
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(r => revealObserver.observe(r));

const music = document.getElementById("bg-music");

document.addEventListener("click", () => {
  if (music.paused) {
    music.play();
  }
}, { once: true });

