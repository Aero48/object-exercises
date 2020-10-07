//Array of objects containing the info needed to generate the circles
let circles = [
    {x: 200, y:100, diameter:50, pulseSpeed:2, color:"#bfc4ff"},
    {x: 150, y:40, diameter:50, pulseSpeed:2, color:"#91edb9"},
    {x: 100, y:25, diameter:50, pulseSpeed:2, color:"#e7ed91"},
    {x: 50, y:300, diameter:50, pulseSpeed:2, color:"#ed9191"},
    {x: 250, y:240, diameter:50, pulseSpeed:2, color:"#e891ed"}
]

function setup(){
    createCanvas(800,600);
    background("black");
    strokeWeight(0);
}

//The speed in which the diameters of the circles change depends on whether the diameters are larger or smaller than 50
function pulse(i){
    if (circles[i].diameter > 50){
        circles[i].pulseSpeed -= 0.5;
    }else{
        circles[i].pulseSpeed += 0.5;
    }
    circles[i].diameter += circles[i].pulseSpeed;
}

function draw(){
    //Cycles through all of the elements of the "circles" array
    for(let i = 0; i<5; i++){
        //When the circles reach the right edge of the canvas, they teleport to the left side and at a random y value
        if(circles[i].x>width){
            circles[i].x = 0;
            circles[i].y = Math.random()*height;
        }

        circles[i].x+= 10;
        fill(circles[i].color);

        //Calls the pulse function
        pulse(i);

        //Creates circles based on the values in the "circles" array
        circle(circles[i].x,circles[i].y,circles[i].diameter);
    }
}