function setup() {
    createCanvas(600,600);//creates a canvas of the size given
    background(220);
}
function draw() {
    for(let i = 1; i < 10; i++){
        fill(i* 50);
        circle(50 + i *50, 100, 40)
    }
}

