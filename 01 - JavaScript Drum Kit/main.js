const removeTransition = (evt) => {
    if (evt.propertyName !== 'transform') return;
    evt.target.classList.remove('playing');
  }

const playSound = (keyCode) => {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    const key = document.querySelector(`button[data-key="${keyCode}"]`)

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', () => playSound(key.dataset.key));
});

window.addEventListener('keydown', (evt) => playSound(evt.keyCode));