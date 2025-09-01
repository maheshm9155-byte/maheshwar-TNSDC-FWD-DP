// ======================
// MODAL FUNCTIONALITY
// ======================
function openModal(title) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  modalTitle.innerText = title;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Close modal when clicking outside modal content
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// ======================
// TYPING EFFECT HOME SECTION
// ======================
const typingElement = document.getElementById('typing');
const texts = ["Web Developer", "Python Enthusiast", "Karate Practitioner"];
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typingElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// ======================
// PROFILE PHOTO UPLOAD
// ======================
const uploadInput = document.getElementById('upload-photo');
const profilePhoto = document.getElementById('profile-photo');

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    profilePhoto.src = URL.createObjectURL(file);
  }
});