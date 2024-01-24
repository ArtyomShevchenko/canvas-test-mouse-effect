const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.i;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.size = 30;
    }
    draw(i) {
        this.i = i
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = 'blue'
        ctx.fill()
        // ctx.stroke()
        ctx.closePath()
    };
    update() {
        this.x += this.speedX
        this.y += this.speedY

        this.size -= 0.5
        if (this.size < 2) {
            circlesArr.splice(this.i, 1)
        }
    }
}

const circlesArr = []

function init() {
    requestAnimationFrame(init)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < circlesArr.length; i++) {
        circlesArr[i].update()
        if (circlesArr.length) {
            circlesArr[i].draw(i)
        }
    }
}

init()

canvas.addEventListener('mousemove', ({ x, y }) => {
    circlesArr.push(new Circle(x, y))
})