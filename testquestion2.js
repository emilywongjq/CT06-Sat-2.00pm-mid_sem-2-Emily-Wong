function setup() {
    createCanvas(600,600);
    background(220);
}
function draw() {
    for(let i = 1; i < 11; i++){
        fill(i* 25);
        circle(30 + i *50, 25 + i *50, 50);
    }
}

