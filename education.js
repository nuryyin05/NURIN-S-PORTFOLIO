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
  // EDUCATION SLIDESHOW (HORIZONTAL)
  // ============================
  const eduScroll = document.querySelector('.education-slideshow');
  if (eduScroll) {
    let pos = 0;
    const speed = 0.5; // adjust laju gerak

    function slideLoop() {
      pos += speed;
      if (pos >= eduScroll.scrollWidth - eduScroll.clientWidth) {
        pos = 0; // kembali ke awal
      }
      eduScroll.scrollLeft = pos;
      requestAnimationFrame(slideLoop);
    }

    slideLoop();
  }

  // ============================
  // TIMELINE MARKERS ANIMATION
  // ============================
  const markers = document.querySelectorAll('.timeline-marker');
  markers.forEach(marker => {
    const tooltip = marker.querySelector('.marker-tooltip');
    tooltip.textContent = marker.getAttribute('data-school');
  });

  function animateMarkers() {
    const triggerBottom = window.innerHeight * 0.85;
    markers.forEach(marker => {
      const markerTop = marker.getBoundingClientRect().top;
      if(markerTop < triggerBottom) {
        marker.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', animateMarkers);
  animateMarkers(); // call on page load

  // ============================
  // MAP PINS TOOLTIP
  // ============================
  document.querySelectorAll('.pin').forEach(pin => {
    pin.addEventListener('mouseenter', () => {
      const tooltip = document.querySelector('.map-tooltip');
      tooltip.textContent = pin.getAttribute('data-info');
    });
    pin.addEventListener('mouseleave', () => {
      const tooltip = document.querySelector('.map-tooltip');
      tooltip.textContent = "Hover over a pin to see info";
    });
  });

});

/* ============================
   LOCATION CARD SCROLL ANIMATION
============================ */
const locationCards = document.querySelectorAll('.location-card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 200); // delay satu-satu
      }
    });
  },
  { threshold: 0.2 }
);

locationCards.forEach(card => observer.observe(card));

