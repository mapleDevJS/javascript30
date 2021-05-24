const heroElement = document.querySelector('.hero');
const textElement = heroElement.querySelector('h1');
const walk = 50;

function shadow(evt) {
    const {offsetWidth: width, offsetHeight: height} = heroElement;
    let {offsetX: x, offsetY: y} = evt;

    if (this !== evt.target) {
        x = x + evt.target.offsetLeft;
        y = y + evt.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    textElement.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;

}

heroElement.addEventListener('mousemove', shadow);