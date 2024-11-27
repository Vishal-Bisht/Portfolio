const typedTextSpan = document.querySelector('.typed-text');

let words = ["Front-end Developer","Programmer","CS Student","Web Developer",];
const typingDelay = 100;
const earsingDelay = 100;
const newLetterDelay = 100;
let index = 0;
let charIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    if(words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if(charIndex < words[index].length) {
        typedTextSpan.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if(charIndex > 0){
        typedTextSpan.textContent = words[index].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, earsingDelay);
    } else {
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}
