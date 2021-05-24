const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 1;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function changeDirection() {
    if(hue > 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
};

function changeLineWidth (direction) {
    if (direction) {
     ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
};

function draw(evt) {
    if(!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(evt.offsetX, evt.offsetY);
    ctx.stroke();
        
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
    hue++;

    changeDirection();
    changeLineWidth(direction);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (evt) => {
    isDrawing = true;
    [lastX, lastY] = [evt.offsetX, evt.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);