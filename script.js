const galleryImages = document.querySelectorAll(".gallery-image");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModalButton = document.getElementById("closeModal");

function openImageModal(image) {
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalCaption.textContent = image.alt;

  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  imageModal.classList.remove("active");
  modalImage.src = "";
  document.body.style.overflow = "";
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    openImageModal(image);
  });
});

closeModalButton.addEventListener("click", closeImageModal);

imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});