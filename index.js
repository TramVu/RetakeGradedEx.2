const canvas = document.getElementById("target");
const context = canvas.getContext("2d");

canvas.width = 672;
canvas.height = 744; 


class Ball {
    constructor(startX, startY, speedX, speedY, radius, color) {
        this.x = startX;
        this.y = startY;
        this.speedY = speedY;
        this.speedX = speedX;
        this.radius = radius;
        this.color = color;
    }

    update() {
        /* if((this.y >= canvas.height) || (this.y <= 0)) {
            this.speedY = -this.speedY;
        }
        if(this.x >= canvas.width || (this.x <= 0)) {
            this.speedX = -this.speedX;
        } */
        this.y = this.y + this.speedY;
        this.x = this.x + this.speedX;
    }

    draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}

//const ballStorage = [];
let bigAsteroid = new Ball (Math.random() * canvas.width, Math.random() * canvas.height, 50, 50)
let smallAsteroid = new Ball (Math.random() * canvas.width, Math.random() * canvas.height, 100, 100)

function updateScreen() {
    console.log("update screen called");
    context.clearRect(0,0,canvas.width,canvas.height);
    bigAsteroid.draw();
    bigAsteroid.update();
    smallAsteroid.draw();
    smallAsteroid.update();
    /* for(let i = 0; i < 4; i++) {
        ballStorage.push(
            new Ball(Math.random() * canvas.width, // x coord
                    Math.random() * canvas.height, // y coord
                    (Math.random() * 10) * (Math.random() > 0.5 ? 1 : -1), // x speed
                    (Math.random() > 0.5 ? 1 : -1))// y speed
        );
    } */

    /* for(let i = 0; i < ballStorage.length; i++) {
        ballStorage[i].update();
        setInterval(ballStorage[i].draw(),1000/60 );
    } */
    //player.update();
    //player.draw();

    window.requestAnimationFrame(updateScreen);
}
updateScreen();