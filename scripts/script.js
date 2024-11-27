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