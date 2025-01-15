function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "GalerieCollectorDeKenzo") {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("gallery-screen").style.display = "block";
  } else {
    document.getElementById("error-message").textContent = "Incorrect password. Try again.";
  }
}

function openLightbox(imgSrc) {
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgSrc;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  var lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none";
}

// Add click event listeners to all images in the gallery
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.src);
  });
});
