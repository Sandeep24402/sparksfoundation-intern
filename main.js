const toggle = () => {
  const nav = document.getElementById("topnav");
  nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
};


// Image slider 
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  //Get current class
  const current = document.querySelector('.current');
  //Remove  current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to nextElementSibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}


const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for previous slide
  if (current.previousElementSibling) {
    // Add current to previousElementSibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length -1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
}

// Buttons Events
next.addEventListener('click', e => {
  nextSlide();
});
prev.addEventListener('click', e => {
  prevSlide();
});











