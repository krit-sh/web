const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');

function blink() {
  leftEye.style.height = '0px'; // Close left eye
  rightEye.style.height = '0px'; // Close right eye
  setTimeout(() => {
    leftEye.style.height = '8px'; // Open left eye
    rightEye.style.height = '8px'; // Open right eye
  }, 200);
}

setInterval(blink, 3000); // Blink every 3 seconds

// Selecting the menu icon and navigation links
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class
});
