// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  let index = 0;
  let textIndex = 0;
  const rotate = document.getElementById("rotateText");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotate.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotate.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});
document.addEventListener("DOMContentLoaded", () => {
  const toRotate = ["Irfha Najla Qisti ar", "D1A240058"];
  let index = 0;
  let textIndex = 0;
  const rotate = document.getElementById("rotateTexts");
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 1500;

  function typeEffect() {
    const currentText = toRotate[index];

    if (isDeleting) {
      rotate.textContent = currentText.substring(0, textIndex--);
      if (textIndex < 0) {
        isDeleting = false;
        index = (index + 1) % toRotate.length;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(typeEffect, deletingSpeed);
      }
    } else {
      rotate.textContent = currentText.substring(0, textIndex++);
      if (textIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetweenWords);
      } else {
        setTimeout(typeEffect, typingSpeed);
      }
    }
  }

  typeEffect();
});