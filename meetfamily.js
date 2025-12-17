<script>
  // ==========================
  // FAMILY IMAGE HOVER EFFECT
  // ==========================
  const familyImages = document.querySelectorAll('.family-img');

  familyImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      const desc = img.querySelector('.family-desc');
      desc.style.opacity = '1';
      desc.style.transform = 'translateX(0)';
    });

    img.addEventListener('mouseleave', () => {
      const desc = img.querySelector('.family-desc');
      desc.style.opacity = '0';
      desc.style.transform = 'translateX(20px)';
    });
  });

  // ==========================
  // LIGHTBOX / POPUP GALLERY
  // ==========================
  // Create overlay element
  const lightboxOverlay = document.createElement('div');
  lightboxOverlay.classList.add('lightbox-overlay');
  lightboxOverlay.innerHTML = '<img src="" alt="Popup Image" id="lightbox-img">';
  document.body.appendChild(lightboxOverlay);

  const lightbox = document.getElementById('lightbox-img');

  // Select all gallery images
  const galleryItems = document.querySelectorAll('.gallery-item img');

  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      lightboxOverlay.classList.add('active');
      lightbox.src = img.src;
      lightbox.alt = img.alt;
    });
  });

  // Close lightbox when click outside image
  lightboxOverlay.addEventListener('click', e => {
    if(e.target !== lightbox) {
      lightboxOverlay.classList.remove('active');
      lightbox.src = '';
      lightbox.alt = '';
    }
  });

  // Close lightbox on Esc key
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      lightboxOverlay.classList.remove('active');
      lightbox.src = '';
      lightbox.alt = '';
    }
  });
</script>
