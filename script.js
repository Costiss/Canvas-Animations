const myImage = new Image();
myImage.src = './fire.jpg';


myImage.addEventListener("load", () => {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 667;



    let particlesArray = [];
    const numberOfParticles = 5000;

    class Particle {
        constructor() { //Particle Definition
            this.x = Math.random() * canvas.width
            this.y = canvas.height;
            this.speed = 0;
            this.velocity = Math.random() * 4.5;
            this.size = Math.random() * 3.5 + 1;

        }
        update() { //Particle Movement
            this.y -= this.velocity;
            if (this.y <= 0) {
                this.y = canvas.height
                this.x = Math.random() * canvas.width
            }
        }
        draw(i) { //Particle "Body"
            ctx.beginPath();
            const colors = ["#ff0000", "#ff5a00", "#ff9a00", "#ffce00", "#ffe808", "white", "gray"]
            ctx.fillStyle = colors[i]
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    const init = () => {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle) //Generate all particles 
        }
    }
    init();
    const animate = () => {
        
        ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height)
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < numberOfParticles; i++) {
            const randomColor = Math.floor(Math.random() * 6);
            particlesArray[i].update();
            particlesArray[i].draw(randomColor);
        }
        requestAnimationFrame(animate)//Loop, recursion
    }
    animate()
})