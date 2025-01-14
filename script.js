document.addEventListener("DOMContentLoaded", () => {
  const passwordScreen = document.getElementById("password-screen");
  const gallery = document.getElementById("gallery");
  const submitButton = document.getElementById("submit-password");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const closeLightbox = document.getElementById("close-lightbox");

  const correctPassword = "GalerieCollectorDeKenzo"; // Define your password here

  // Password validation
  submitButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value.trim();
    if (enteredPassword === correctPassword) {
      passwordScreen.style.display = "none"; // Hide password screen
      gallery.style.display = "block"; // Show gallery
    } else {
      errorMessage.textContent = "Incorrect password. Please try again.";
    }
  });

  passwordInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      submitButton.click();
    }
  });

  // Lightbox functionality
  document.querySelectorAll(".gallery-grid img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImage.src = img.src; // Set the clicked image as the lightbox image
      lightbox.style.display = "flex"; // Show the lightbox
    });
  });

  // Close the lightbox when clicking the close button
  closeLightbox.addEventListener("click", () => {
    lightbox.style.display = "none"; // Hide the lightbox
  });

  // Close the lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none"; // Hide the lightbox
    }
  });
});