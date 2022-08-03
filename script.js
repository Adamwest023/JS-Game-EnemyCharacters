//elements needed to create canvas and get it its built in functions 
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;

//enemy class 

class Enemy {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = 100;
        this.height = 100;
    }
    update(){
        this.x++;
        this.y++;
    };
    draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

const enemy1 = new Enemy();

//animation function
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemy1.update();
    enemy1.draw();
    requestAnimationFrame(animate);
};

animate(); 