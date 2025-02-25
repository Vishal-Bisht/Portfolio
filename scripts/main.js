// Read more button

document.querySelector('.read_more_btn').addEventListener('click', function() { 
    const aboutMore = document.querySelector('.about_more');
    aboutMore.style.display === 'none'
    ?(aboutMore.style.display = 'block',
    this.textContent = 'Read less')
    : (
      aboutMore.style.display = 'none',
      this.textContent = 'Read more'
    );
  });

// Background color toggle button  

const toggler = document.getElementById('switch');
const links = document.querySelectorAll('.nav-opt');
const icon = document.querySelector('.icon');
const bgcolor1 = '#1d1a1a';
const bgcolor2 = '#f5f5f5';

toggler.addEventListener("click", ()=>{
  if (toggler.checked === true) {
    document.body.style.backgroundColor = bgcolor1;
    document.body.style.color = "#ffffff";
    document.body.classList.add('dark-mode');
    links.forEach(link => link.style.color = "#ffffff"); 
    icon.style.fill = "#ffffff";

} else {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#1d1a1a";
    document.body.classList.remove('dark-mode');
    links.forEach(link => link.style.color = "#000000");
    icon.style.fill = "#000000";
}
});

// section fade-in effect
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const hamIcon = document.querySelector('.ham-icon-container');
  const navLinks = document.querySelector('.nav-links');

  hamIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});