//Contains all the data necessary to create a colored circle
let orb = {
    xPos: 200,
    yPos: 300,
    diameter: 50,
    color: "#bfc4ff"
}

function setup(){
    createCanvas(800,600);
    background(237, 191, 255);
    //Sets the fill to the color specified in the orb object
    fill(orb.color);
    //Creates a circle based on the data in the orb object
    circle(orb.xPos, orb.yPos, orb.diameter);
}