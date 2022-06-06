const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.controls');
const button = document.querySelectorAll('.control');
const mainContent = document.querySelectorAll('.main-content');

function PageTransitions() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', (ev) => {
            let btnActive = document.querySelectorAll('.active-btn');
            btnActive.classList.remove('.active-btn');
            const btnClicked = ev.target;
            btnClicked.classList.add('.active-btn');
        });
    }
}