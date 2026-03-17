// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach((element)=>{
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;
    if(elementTop < windowHeight - revealPoint){
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Smooth scroll on nav click
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({behavior: 'smooth'});
  });
});