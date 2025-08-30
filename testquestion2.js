function setup() {
    createCanvas(600,600);//creates a canvas of the size given
    background(220);
}
function draw() {
    for(let i = 1; i < 11; i++){
        fill(i* 25);
        circle(75 + i *50, 75 + i *50, 50);
    }
}

