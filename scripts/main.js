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


  function SkillContainerBackground(Color) {
    let style = document.querySelector('#skillContainerStyle');
    
    if (!style) {
        style = document.createElement('style');
        style.id = 'skillContainerStyle';
        document.head.appendChild(style);
    }
    style.innerHTML = `
        .skill_container::before {
            background: linear-gradient(to left, transparent, ${Color});
        }
        .skill_container::after {
            background: linear-gradient(to right, transparent, ${Color});
        }
    `;
}

// Toggle button  

let toggler = document.getElementById('switch');
let links = document.querySelectorAll('.nav-opt');
let icon = document.querySelector('.icon');
let skillContainer = document.querySelector('.skill_container');
const bgcolor = '#1d1a1a';

toggler.addEventListener("click", ()=>{
  if (toggler.checked === true) {
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = "white";
    links.forEach(link => link.style.color = "white"); 
    icon.style.fill = "white";
    SkillContainerBackground(bgcolor);

} else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#1d1a1a";
    links.forEach(link => link.style.color = "black");
    icon.style.fill = "black";
    SkillContainerBackground('white');

}
});